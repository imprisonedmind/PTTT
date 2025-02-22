import { Button, type ButtonProps } from "@/components/ui/button";
import { forwardRef } from "react";

interface PaymentButtonProps extends ButtonProps {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
}

export const PaymentButton = forwardRef<HTMLButtonElement, PaymentButtonProps>(
  ({ variant = "primary", className, ...props }, ref) => {
    const baseStyles = "w-full";
    const variantStyles = {
      primary: "bg-[#0077FF] hover:bg-[#0066CC] text-white",
      secondary: "bg-[#F0F0F0] hover:bg-[#E0E0E0] text-[#333333]",
      outline:
        "bg-transparent border border-[#0077FF] text-[#0077FF] hover:bg-[#0077FF] hover:text-white",
    };

    return (
      <Button
        ref={ref}
        // @ts-ignore
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        {...props}
      />
    );
  },
);

PaymentButton.displayName = "PaymentButton";
