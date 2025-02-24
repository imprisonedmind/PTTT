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

    // Build the parameter string in the order received.
    let pfParamString = "";
    // Use formData.entries() which preserves insertion order.
    for (const [key, value] of formData.entries()) {
      if (key !== "signature" && value.toString().trim() !== "") {
        pfParamString += `${key}=${pfUrlEncode(value.toString())}&`;
      }
    }
    // Remove trailing '&'
    pfParamString = pfParamString.slice(0, -1);

    // Append passphrase if set.
    const passphrase = process.env.PAYFAST_PASSPHRASE;
    if (passphrase) {
      pfParamString += `&passphrase=${pfUrlEncode(passphrase)}`;
    }

    // Compute the MD5 hash of the constructed string.
    const computedSignature = crypto
      .createHash("md5")
      .update(pfParamString)
      .digest("hex");
    const receivedSignature = formData.get("signature")?.toString();

    if (receivedSignature !== computedSignature) {
      console.error("Invalid PayFast signature", {
        receivedSignature,
        computedSignature,
      });
      return new NextResponse("Invalid signature", { status: 400 });
    }

    // Convert formData to an object.
    const data: { [key: string]: string } = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value.toString();
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
