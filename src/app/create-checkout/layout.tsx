import { PaymentLayout } from "@/components/layouts/payment";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <PaymentLayout>{children}</PaymentLayout>;
}
