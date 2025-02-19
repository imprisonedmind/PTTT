"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";
import { MainWrapper } from "@/components/wrapper/mainWrapper";

export default function PricingMain() {
  const plans = [
    {
      name: "Network Access",
      price: "R100",
      period: "/mo",
      features: [
        "Access to the Mighty Network",
        "Connect with community members",
        "Participate in discussions",
      ],
    },
    // {
    // 	name: "Network Access",
    // 	price: "R1080",
    // 	period: "/yr",
    // 	discount: "Save 10% with annual billing",
    // 	features: ["Access to the Mighty Network", "Connect with community members", "Participate in discussions"],
    // },
    {
      name: "Course + Network",
      price: "R800",
      period: "",
      popular: true,
      features: [
        "Full course access",
        "3 Month Mighty Network access",
        "Exclusive resources",
      ],
    },
  ];

  return (
    <MainWrapper className="border-y py-32 bg-zinc-50" id="pricing">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Pricing
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Choose the plan that best fits your needs and start your journey
            today.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
          {plans.map((plan) => (
            <Card
              key={plan.name + plan.period}
              className={`flex flex-col ${plan.popular ? "border-primary" : ""}`}
            >
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                {plan.popular && (
                  <span className="px-2.5 py-0.5 text-xs font-semibold text-primary-foreground bg-primary rounded-full absolute top-4 right-4">
                    POPULAR
                  </span>
                )}
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-4xl font-bold">
                  {plan.price}
                  <span className="text-lg font-normal text-gray-500 dark:text-gray-400">
                    {plan.period}
                  </span>
                </div>
                {/*{plan.discount && <p*/}
                {/*  className="text-sm text-green-600 dark:text-green-400 mt-2">{plan.discount}</p>}*/}
                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-4 h-4 mr-2 text-green-500" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full bg-[#7FB3B1] hover:bg-[#7FB3B1]/90">
                  Choose plan
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </MainWrapper>
  );
}
