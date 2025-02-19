import { MainWrapper } from "@/components/wrapper/mainWrapper";
import HeroAvatarSection from "@/components/hero/heroAvatarSection";
import HeroChip from "@/components/hero/heroChip";
import HeroOverlay from "@/components/hero/heroOverlay";
import HeroMain from "@/components/hero/heroMain";

export default function Hero() {
  return (
    <MainWrapper className="bg-[url(/boys.jpg)] bg-cover bg-left relative bg-zinc-50">
      <HeroOverlay />

      <div className="flex items-center w-full text-center md:text-start text-white py-16 overflow-clip md:h-[700px] ">
        <div className="h-full justify-between flex flex-col gap-8 z-50 px-8 md:px-32 2xl:px-0">
          <div />
          <div className="flex flex-col gap-8">
            <HeroChip />
            <HeroMain />
          </div>
          <HeroAvatarSection />
        </div>
      </div>
    </MainWrapper>
  );
}
