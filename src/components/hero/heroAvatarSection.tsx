import { HeroCoachImage } from "@/components/hero/heroCoachImages";
import kath from "../../../public/kath.avif";
import jax from "../../../public/jax.avif";

export default function HeroAvatarSection() {
  return (
    <div className="flex flex-row gap-4 items-center relative w-fit mx-auto md:mr-auto md:ml-0">
      <div className="relative flex-row flex">
        <HeroCoachImage imgSrc={kath} />
        <HeroCoachImage imgSrc={jax} className={"-ml-4 z-10"} />

        <div className="absolute bottom-1 right-2 z-50">
          {/* Static green dot */}
          <div className="bg-green-500 h-2 w-2 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

          {/* Pulsing wrapper to prevent overriding translate */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-green-500/30 h-5 w-5 rounded-full animate-pulse-scale" />
          </div>
        </div>
      </div>

      <p className="text-md">Professional coaches online</p>
    </div>
  );
}
