"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { XCircle } from "lucide-react";
import Link from "next/link";
import { PaymentButton } from "@/components/buttons/paymentButton";

export default function FailedPaymentPage() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-[#002B5C] flex items-center justify-center">
          <XCircle className="mr-2 text-[#E12E56]" />
          Payment Failed
        </CardTitle>

        <CardDescription className="text-center text-[#666666]">
          We were unable to process your payment of R 250.00.
        </CardDescription>
      </CardHeader>

      <CardContent className="text-[#002B5C]">
        <p className="mb-4">
          We apologize for the inconvenience. Please check your payment details
          and try again.
        </p>
        <p>If the problem persists, please contact our support team.</p>
      </CardContent>

      <CardFooter className="flex justify-center">
        <Link href="/payment/checkout">
          <PaymentButton>Try Again</PaymentButton>
        </Link>
      </CardFooter>
    </Card>
  );
}
