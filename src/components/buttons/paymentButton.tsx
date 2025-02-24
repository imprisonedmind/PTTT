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
    const baseStyles = "w-full rounded-md font-semibold";
    const variantStyles = {
      primary: "bg-[#E12E56] hover:bg-[#c02649] text-white",
      secondary: "bg-[#F5F5F5] hover:bg-[#c02649] text-[#002B5C]",
      outline:
        "bg-transparent border-2 border-[#0072C6] text-[#0072C6] hover:bg-[#0072C6] hover:text-white",
    };

    return (
      <Button
        ref={ref}
        // @ts-expect-error
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        {...props}
      />
    );
  },
);

PaymentButton.displayName = "PaymentButton";
