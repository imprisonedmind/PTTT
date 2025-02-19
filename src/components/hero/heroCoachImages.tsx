import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface HeroCoachImageProps {
  imgSrc: StaticImageData;
  className?: string;
}

export const HeroCoachImage: FC<HeroCoachImageProps> = ({
  imgSrc,
  className,
}) => {
  return (
    <Image
      src={imgSrc}
      alt={"Parenting The Teen Tribe"}
      className={cn("h-9 w-9 rounded-full border border-white z-20", className)}
    />
  );
};
