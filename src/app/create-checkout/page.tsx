"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import { PaymentButton } from "@/components/buttons/paymentButton";

const formSchema = z.object({
  name_first: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  name_last: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email_address: z.string().email({
    message: "Please enter a valid email address.",
  }),
  cell_number: z.string().optional(),
});

export default function CreateCheckoutPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name_first: "",
      name_last: "",
      email_address: "",
      cell_number: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const res = await fetch("/api/payfast/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          amount: "250.00",
          item_name: "R250 Subscription",
        }),
      });

      if (!res.ok) {
        throw new Error("Error creating checkout");
      }

      const data = await res.json();
      router.push(data.url);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-[#002B5C]">
          Pay with <span className="!text-[#E12E56]">PayFast</span>
        </CardTitle>
        <CardDescription className="text-[#666666]">
          Enter your details to continue to PayFast&#39;s payment portal.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name_first"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#002B5C]">First Name</FormLabel>
                    <FormControl>
                      <Input {...field} className="border-[#E5E5E5]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name_last"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#002B5C]">Last Name</FormLabel>
                    <FormControl>
                      <Input {...field} className="border-[#E5E5E5]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email_address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#002B5C]">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        {...field}
                        className="border-[#E5E5E5]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cell_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#002B5C]">
                      Cell Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="082XXXXXXXX"
                        className="border-[#E5E5E5]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
        {/* Pricing breakdown */}
        <div className="mt-6 p-4 bg-[#F5F5F5] rounded-lg">
          <div className="flex flex-col gap-2">
            {/*<div className="flex justify-between items-center">*/}
            {/*  <span className="font-semibold text-[#002B5C]">Course Fee:</span>*/}
            {/*  <span className="font-bold text-[#002B5C]">R 700.00</span>*/}
            {/*</div>*/}
            <div className="flex justify-between items-center">
              <span className="font-semibold text-[#002B5C]">
                Monthly Subscription:
              </span>
              <span className="font-bold text-[#002B5C]">R 250.00</span>
            </div>
            {/*<div className="flex justify-between items-center border-t border-[#E5E5E5] pt-2 mt-2">*/}
            {/*  <span className="font-semibold text-[#002B5C]">*/}
            {/*    Total Amount:*/}
            {/*  </span>*/}
            {/*  <span className="font-bold text-[#002B5C]">R 800.00</span>*/}
            {/*</div>*/}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <PaymentButton
          type="submit"
          disabled={loading}
          onClick={form.handleSubmit(onSubmit)}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            "Pay Now"
          )}
        </PaymentButton>
      </CardFooter>
    </Card>
  );
}
