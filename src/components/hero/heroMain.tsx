import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroMain() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex-col flex gap-2 max-w-[650px]">
        <h1 className="font-bold text-5xl">Parenting The Teen Tribe</h1>

        <p className="text-2xl">
          Join our supportive network to navigate the transitional years of
          parenting tweens and teens together.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <Link
          href={"https://parenting-the-teen-tribe.mn.co/"}
          target={"_blank"}
        >
          <Button variant={"outline"} size={"lg"}>
            View the Network
          </Button>
        </Link>

        <Link
          href={"https://parenting-the-teen-tribe.mn.co/sign_in"}
          target={"_blank"}
        >
          <Button variant={"secondary"} size={"lg"}>
            Sign in to join the Tribe
          </Button>
        </Link>
      </div>
    </div>
  );
}
