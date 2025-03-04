import Link from "next/link";
import { Button } from "@/components/ui/button";
import { networkUrl } from "@/lib/utils";

export default function HeroMain() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex-col flex gap-2 max-w-[650px]">
        <h1 className="font-bold text-5xl">Parenting the Teen Tribe</h1>

        <p className="text-2xl">
          Join our supportive network to navigate the transitional years of
          parenting Tweens and Teens together.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <Link href={networkUrl} target={"_blank"}>
          <Button variant={"secondary"} size={"lg"}>
            Sign up to Join the Tribe
          </Button>
        </Link>
      </div>
    </div>
  );
}
