import { NextResponse } from "next/server";

// Global array to store incoming events (for demonstration only)
let events: { receivedAt: string; payload: any }[] = [];

// Export a helper so other routes can access the stored events.
export function getStoredEvents() {
  return events;
}

export async function POST(request: Request) {
  try {
    // Parse the JSON payload from YOCO
    const payload = await request.json();

    // Process only payment success events
    if (payload.type !== "payment.succeeded") {
      return NextResponse.json(
        { message: "Event not processed" },
        { status: 200 },
      );
    }

    // Retrieve your Zapier webhook URL from environment variables
    const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL;
    if (!zapierWebhookUrl) {
      throw new Error("Zapier webhook URL is not configured.");
    }

    // Forward the payload to Zapier
    const zapierResponse = await fetch(zapierWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!zapierResponse.ok) {
      console.error(
        "Failed to forward event to Zapier:",
        zapierResponse.statusText,
      );
      return NextResponse.json(
        { error: "Failed to forward event to Zapier" },
        { status: 500 },
      );
    }

    // Store the event (timestamp and payload)
    events.push({ receivedAt: new Date().toISOString(), payload });

    // Respond to YOCO with a success status
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
