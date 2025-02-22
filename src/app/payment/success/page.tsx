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
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-[#333333] flex items-center justify-center">
          <CheckCircle className="mr-2 text-green-500" />
          Payment Successful
        </CardTitle>
        <CardDescription className="text-center">
          Your payment of R 800.00 has been processed successfully.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <p className="mb-4">
          Thank you for your payment. You have now joined the Parenting the Teen
          Tribe network.
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
