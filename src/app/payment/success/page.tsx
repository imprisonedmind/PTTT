"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { PaymentButton } from "@/components/buttons/paymentButton";

export default function SuccessPaymentPage() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-[#002B5C] flex items-center justify-center">
          <CheckCircle className="mr-2 text-[#0072C6]" />
          Payment Successful
        </CardTitle>

        <CardDescription className="text-center text-[#666666]">
          Your payment of R 290.00 has been processed successfully.
        </CardDescription>
      </CardHeader>

      <CardContent className="text-[#002B5C]">
        <p className="mb-4">
          Thank you for your payment. You have now joined the Parenting the Teen
          Tribe network. You will be charged R290 monthly, you can cancel at any
          time.
        </p>
        <p>You will receive a confirmation email shortly.</p>
      </CardContent>

      <CardFooter className="flex justify-center">
        <Link href="https://parenting-the-teen-tribe.mn.co/" target="_blank">
          <PaymentButton>View the Network</PaymentButton>
        </Link>
      </CardFooter>
    </Card>
  );
}
