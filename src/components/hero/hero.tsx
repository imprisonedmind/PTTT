import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MainWrapper } from "@/components/wrapper/mainWrapper";
import HeroAvatarSection from "@/components/hero/heroAvatarSection";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <MainWrapper className="bg-[url(/boys.jpg)] bg-cover bg-left relative bg-zinc-50">
      <div className="absolute w-full h-full bg-gradient-to-t lg:bg-gradient-to-r from-zinc-950/90 via-zinc-950/60 to-zinc-950/50 lg:from-zinc-950/90 lg:via-zinc-950/70 lg:to-zinc-950/0 top-0 left-0" />

      <div className="flex items-center w-full text-center md:text-start text-white py-16 overflow-clip md:h-[700px] ">
        <div className="h-full justify-between flex flex-col gap-8 z-50 px-8 md:px-32 2xl:px-0">
          <div />

          <div className="flex flex-col gap-8 items-center md:items-start">
            <div className="p-2 px-4 border border-primary/50 text-primary rounded-full w-fit flex flex-row gap-2 items-center bg-primary/10">
              <Star size={14} fill="currentColor" />
              <p className="text-md font-medium">
                Courses start on the 19th March 2025
              </p>
            </div>

            <div className="flex flex-col gap-16">
              <div className="flex-col flex gap-2">
                <h2 className="font-bold text-5xl">Parenting The Teen Tribe</h2>

                <p className="text-2xl">
                  Join our supportive network to navigate the transitional
                  <br />
                  years of parenting tweens and teens together.
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <Link
                  href={"https://paystack.com/pay/nuwmul4t7o"}
                  target={"_blank"}
                >
                  <Button variant={"secondary"} size={"lg"}>
                    Sign in to join the Tribe
                  </Button>
                </Link>
                <Link
                  href={"https://paystack.com/pay/nuwmul4t7o"}
                  target={"_blank"}
                >
                  <Button variant={"ghost"} size={"lg"}>
                    View the Network
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <HeroAvatarSection />
        </div>
      </div>
    </MainWrapper>
  );
}
