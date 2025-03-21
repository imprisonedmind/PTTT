import { MainWrapper } from "@/components/wrapper/mainWrapper";
import HeroChip from "@/components/hero/heroChip";
import HeroMain from "@/components/hero/heroMain";
import Circles from "@/components/reusable/circles";

export default function Hero() {
  return (
    // <MainWrapper className="bg-[url(/boys.jpg)] bg-cover bg-center bg-no-repeat relative bg-zinc-50">
    <MainWrapper className="relative bg-quinary overflow-clip">
      {/*<HeroOverlay />*/}

      <div className="flex relative items-center w-full text-center md:text-start py-32 md:h-[500px] z-[500]">
        <div className="flex flex-col gap-8 px-4 md:pl-8 mx-auto md:mx-0">
          <HeroChip />
          <HeroMain />
        </div>
      </div>

      <Circles />
    </MainWrapper>
  );
}
