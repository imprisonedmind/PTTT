"use client";
import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import yoco from "../../../public/yoco.svg";

interface PaymentLayoutProps {
  children: ReactNode;
}

export function PaymentLayout({ children }: PaymentLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex">
      <div className="justify-center items-center w-1/2 bg-cover bg-center hidden lg:flex bg-[#0080ff]">
        <Image
          src={yoco}
          alt="Company logo"
          width={176}
          height={176}
          className="w-44 h-auto"
        />
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
