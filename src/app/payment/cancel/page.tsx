"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import Link from "next/link";
import { PaymentButton } from "@/components/buttons/paymentButton";

export default function CancelPaymentPage() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-[#002B5C] flex items-center justify-center">
          <AlertCircle className="mr-2 text-[#F5A623]" />
          Payment Cancelled
        </CardTitle>

        <CardDescription className="text-center text-[#666666]">
          Your payment of R 800.00 has been cancelled.
        </CardDescription>
      </CardHeader>

      <CardContent className="text-center text-[#002B5C]">
        <p className="mb-4">
          You have chosen to cancel your payment. No charges have been made to
          your account.
        </p>
        <p>
          If you&#39;d like to try again or have any questions, please don&#39;t
          hesitate to contact us.
        </p>
      </CardContent>

      <CardFooter className="flex justify-center gap-4">
        <Link href="/payment/checkout">
          <PaymentButton>Try Again</PaymentButton>
        </Link>
        <Link href="/">
          <PaymentButton variant="outline">Back to Home</PaymentButton>
        </Link>
      </CardFooter>
    </Card>
  );
}
