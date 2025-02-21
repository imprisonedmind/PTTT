import { MainWrapper } from "@/components/wrapper/mainWrapper";
import HeroAvatarSection from "@/components/hero/heroAvatarSection";
import HeroChip from "@/components/hero/heroChip";
import HeroMain from "@/components/hero/heroMain";
import Circles from "@/components/reusable/circles";

export default function Hero() {
  return (
    // <MainWrapper className="bg-[url(/boys.jpg)] bg-cover bg-center bg-no-repeat relative bg-zinc-50">
    <MainWrapper className="relative bg-quinary overflow-clip">
      {/*<HeroOverlay />*/}

      <div className="flex relative items-center w-full text-center md:text-start py-32 md:h-[700px]">
        <div className="h-full justify-between flex flex-col gap-16 z-50 px-3 md:px-8 lg:px-32 2xl:px-0">
          <div className="flex flex-col gap-8">
            <HeroChip />
            <HeroMain />
          </div>
          <HeroAvatarSection />
        </div>
      </div>

      <Circles />
    </MainWrapper>
  );
}
