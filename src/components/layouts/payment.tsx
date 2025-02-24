"use client";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import payfast from "../../../public/payfast-logo.svg";

interface PaymentLayoutProps {
  children: ReactNode;
}

export function PaymentLayout({ children }: PaymentLayoutProps) {
  return (
    <div className="min-h-screen bg-white flex">
      <div className="flex-col justify-center items-center w-1/2 bg-cover bg-center hidden gap-8 lg:flex bg-[#0072C6]">
        <div
          className={
            "bg-white flex justify-center items-center p-8 px-16 w-[300px]"
          }
        >
          <Image src={payfast} alt={"payfast.io logo"} className="size-44" />
        </div>

        <div className="text-white text-center">
          <h1 className="text-4xl font-bold">Secure Payments</h1>
          <p className="text-xl">Fast, reliable payment processing</p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
