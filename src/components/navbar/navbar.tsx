"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavbarItem } from "@/components/navbar/navbarItem";
import { LogoCircle } from "@/components/reusable/LogoCircle";
import Link from "next/link";
import { signInUrl } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 flex items-center justify-between w-full p-4 bg-white drop-shadow z-[500]">
      <div className="min-w-[110px]">
        <LogoCircle />
      </div>

      <ul className="hidden md:flex flex-row gap-4">
        <NavbarItem title={"Features"} href="#features" />
        <NavbarItem title={"Meet your coaches"} href="#coaches" />
        <NavbarItem title={"Pricing"} href="#pricing" />
      </ul>

      <div className="hidden md:flex flex-row gap-4 min-w-[110px]">
        {/*<Button variant="secondary">Contact</Button>*/}
        <Link href={signInUrl} target={"_blank"}>
          <Button variant="default">Get Started</Button>
        </Link>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden p-2">
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="top"
          className="fixed inset-0 bg-white z-[1000] p-6 flex flex-col gap-6"
        >
          <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>

          <ul className="flex flex-col gap-4 text-lg">
            <li>
              <Link href="#features">
                <button onClick={() => setOpen(false)}>Features</button>
              </Link>
            </li>
            <li>
              <Link href="#coaches">
                <button onClick={() => setOpen(false)}>
                  Meet your Coaches
                </button>
              </Link>
            </li>
            <li>
              <Link href={"#pricing"}>
                <button onClick={() => setOpen(false)}>Pricing</button>
              </Link>
            </li>
          </ul>
          <div className="flex flex-col gap-4">
            {/*<Button*/}
            {/*  variant="secondary"*/}
            {/*  className="w-full"*/}
            {/*  onClick={() => setOpen(false)}*/}
            {/*>*/}
            {/*  Contact*/}
            {/*</Button>*/}
            <Link href={signInUrl} target="_blank">
              <Button
                variant="default"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Get Started
              </Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
