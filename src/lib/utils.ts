import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const paymentURl = "/create-checkout";
export const signInUrl = "https://parenting-the-teen-tribe.mn.co/sign_in";
export const networkUrl = "https://parenting-the-teen-tribe.mn.co/";
