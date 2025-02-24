// src/app/api/payfast/ipn/route.ts
import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const data: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    // Extract and remove signature from data
    const receivedSignature = data.signature;
    delete data.signature;

    // Recreate signature string from remaining keys
    const sortedKeys = Object.keys(data).sort();
    let signatureString = "";
    sortedKeys.forEach((key) => {
      const value = data[key];
      if (value) {
        signatureString += `${key}=${encodeURIComponent(value).replace(/%20/g, "+")}&`;
      }
    });
    signatureString = signatureString.slice(0, -1);
    const expectedSignature = crypto
      .createHash("md5")
      .update(signatureString)
      .digest("hex");

    if (receivedSignature !== expectedSignature) {
      console.error("Invalid PayFast signature", {
        receivedSignature,
        expectedSignature,
      });
      return new NextResponse("Invalid signature", { status: 400 });
    }

    // Process the IPN – for example, if payment_status is COMPLETE, update subscription status.
    if (data.payment_status === "COMPLETE") {
      console.log("Payment complete:", data);
      // (Update your database or trigger any local processes here if needed.)
    }

    // Forward the received data to Zapier to maintain your existing workflow.
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
    console.error("Error in IPN endpoint:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
