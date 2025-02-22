// app/create-checkout/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { firstName, lastName, email, amount } = await request.json();

  // Retrieve your YOCO secret key from environment variables
  const yocoSecret = process.env.YOCO_SECRET_KEY;
  if (!yocoSecret) {
    return NextResponse.json(
      { error: "YOCO secret key not configured." },
      { status: 500 },
    );
  }

  // Prepare the checkout payload.
  const checkoutPayload = {
    amount: amount, // amount in cents (e.g. 1000 means R10.00)
    currency: "ZAR",
    // Include customer details in metadata
    metadata: {
      firstName,
      lastName,
      email,
    },
    // Optional: Provide redirect URLs for when the customer completes (or cancels) payment.
    successUrl: "https://parentingtheteentribe.com/payment/success",
    cancelUrl: "https://parentingtheteentribe.com/payment/cancel",
    failureUrl: "https://parentingtheteentribe.com/payment/failed",
  };

  // Call YOCO Checkout API to create a checkout session.
  const res = await fetch("https://payments.yoco.com/api/checkouts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${yocoSecret}`,
    },
    body: JSON.stringify(checkoutPayload),
  });

  if (!res.ok) {
    const errorData = await res.text();
    return NextResponse.json(
      { error: "Failed to create checkout", details: errorData },
      { status: 500 },
    );
  }

  const data = await res.json();
  // data will include a redirectUrl for the YOCO-hosted payment page.
  return NextResponse.json(data, { status: 200 });
}
