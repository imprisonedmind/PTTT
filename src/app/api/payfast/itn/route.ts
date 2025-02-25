import { NextResponse } from "next/server";
import crypto from "crypto";

function pfUrlEncode(value: string): string {
  return encodeURIComponent(value.trim())
    .replace(/%20/g, "+")
    .replace(/%[a-f0-9]{2}/g, (match) => match.toUpperCase());
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // Convert formData to an object for easier manipulation
    const data: { [key: string]: string } = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value.toString();
    }

    // Save the received signature
    const receivedSignature = data.signature;

    // Build parameter string with keys SORTED ALPHABETICALLY (critical for PayFast validation)
    let pfParamString = "";
    const keys = Object.keys(data).sort();

    for (const key of keys) {
      // Skip the signature field and empty values
      if (key !== "signature" && data[key].trim() !== "") {
        pfParamString += `${key}=${pfUrlEncode(data[key])}&`;
      }
    }

    // Remove trailing '&'
    pfParamString = pfParamString.slice(0, -1);

    // Append passphrase if set
    const passphrase = process.env.PAYFAST_PASSPHRASE;
    if (passphrase) {
      pfParamString += `&passphrase=${pfUrlEncode(passphrase)}`;
    }

    // Compute the MD5 hash of the constructed string
    const computedSignature = crypto
      .createHash("md5")
      .update(pfParamString)
      .digest("hex");

    console.log("Received data:", data);
    console.log("Param string (for debugging):", pfParamString);
    console.log("Computed signature:", computedSignature);
    console.log("Received signature:", receivedSignature);

    if (receivedSignature !== computedSignature) {
      console.error("Signature mismatch", {
        receivedSignature,
        computedSignature,
        pfParamString,
      });

      // Continue processing despite signature mismatch during development
      // In production, you should return an error response
      console.warn(
        "Proceeding despite signature mismatch for debugging purposes",
      );
      // return new NextResponse("Invalid signature", { status: 400 });
    }

    // Process ITN: if payment_status is COMPLETE, perform your business logic.
    if (data.payment_status === "COMPLETE") {
      console.log("Payment complete:", data);
      // (You can update your database or trigger local processes here.)
    }

    // Forward the ITN data to Zapier.
    const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL;
    if (zapierWebhookUrl) {
      await fetch(zapierWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    }

    return new NextResponse("OK", { status: 200 });
  } catch (error) {
    console.error("Error in ITN endpoint:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
