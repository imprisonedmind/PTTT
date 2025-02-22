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
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-[#333333] flex items-center justify-center">
          <XCircle className="mr-2 text-red-500" />
          Payment Failed
        </CardTitle>
        <CardDescription className="text-center">
          We were unable to process your payment of R 800.00.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <p className="mb-4">
          We apologize for the inconvenience. Please check your payment details
          and try again.
        </p>
        <p>If the problem persists, please contact our support team.</p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Link href="/create-checkout">
          <PaymentButton>Try Again</PaymentButton>
        </Link>
      </CardFooter>
    </Card>
  );
}
