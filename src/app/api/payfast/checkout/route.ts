// src/app/api/payfast/checkout/route.ts
import { NextResponse } from "next/server";
import crypto from "crypto";

// Helper function to mimic PHP's urlencode: spaces as '+' and hex codes in upper case.
function pfUrlEncode(value: string): string {
  return encodeURIComponent(value || "")
    .replace(/%20/g, "+")
    .replace(/%[a-f0-9]{2}/g, (match) => match.toUpperCase());
}

export async function POST(request: Request) {
  try {
    // Expect buyer details from the form:
    const { name_first, name_last, email_address, cell_number, item_name } =
      await request.json();

    // Validate required fields.
    if (!name_first || !name_last || !email_address || !item_name) {
      return NextResponse.json(
        { error: "Missing required buyer details" },
        { status: 400 },
      );
    }

    // Set billing_date to the current date (YYYY-MM-DD) on the server.
    const currentDate = new Date().toISOString().slice(0, 10);

    // Set up parameters using environment variables and fixed values.
    const params: { [key: string]: string } = {
      merchant_id: process.env.PAYFAST_MERCHANT_ID!,
      merchant_key: process.env.PAYFAST_MERCHANT_KEY!,
      return_url: process.env.PAYFAST_RETURN_URL!,
      cancel_url: process.env.PAYFAST_CANCEL_URL!,
      notify_url: process.env.PAYFAST_NOTIFY_URL!,
      name_first,
      name_last,
      email_address,
      cell_number: cell_number || "", // Make cell_number optional with empty string default
      amount: "250", // R800 total (R700 course fee + R100 subscription)
      item_name, // e.g. "Course + Network Subscription"
      subscription_type: "1", // Subscription
      billing_date: currentDate, // Set to today's date (server-side)
      recurring_amount: "250", // R100 recurring charge
      frequency: "3", // 3 = Monthly
      cycles: "0", // 0 = Indefinite subscription
    };

    // Build the signature string using the required keys in the exact order.
    // IMPORTANT: For PayFast, you must include ALL fields in the signature, even if empty
    const signatureKeys = [
      "merchant_id",
      "merchant_key",
      "return_url",
      "cancel_url",
      "notify_url",
      "name_first",
      "name_last",
      "email_address",
      "cell_number",
      "amount",
      "item_name",
      "subscription_type",
      "billing_date",
      "recurring_amount",
      "frequency",
      "cycles",
    ];

    let signatureString = "";
    for (const key of signatureKeys) {
      // Include the key-value pair in the signature string even if the value is an empty string
      signatureString += `${key}=${pfUrlEncode(params[key])}&`;
    }

    // Remove the trailing '&'
    signatureString = signatureString.slice(0, -1);

    // Append the passphrase (salt) to the signature string.
    const passphrase = process.env.PAYFAST_PASSPHRASE!;
    if (passphrase) {
      signatureString += `&passphrase=${pfUrlEncode(passphrase)}`;
    }

    // Generate the MD5 hash.
    const signature = crypto
      .createHash("md5")
      .update(signatureString)
      .digest("hex");
    params.signature = signature;

    // Build the final query string for the redirect URL.
    // Important: Include all parameters in the request, even if empty
    const queryString = Object.keys(params)
      .map((key) => `${key}=${pfUrlEncode(params[key])}`)
      .join("&");

    // For debugging
    console.log("Generated signature:", signature);
    console.log("Signature string:", signatureString);

    // Use the correct PayFast URL (set PAYFAST_URL to production when live)
    const payfastUrl =
      process.env.PAYFAST_URL || "https://sandbox.payfast.co.za/eng/process";
    const redirectUrl = `${payfastUrl}?${queryString}`;

    return NextResponse.json({ url: redirectUrl });
  } catch (error) {
    console.error("Error in checkout endpoint:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
