import logo from "../../../public/Marketing Logo Blue.avif";
import Image from "next/image";

import { FC } from "react";
import { cn } from "@/lib/utils";

interface LogoCircleProps {
  size?: string;
}

export const LogoCircle: FC<LogoCircleProps> = ({ size }) => {
  return (
    <Image
      src={logo}
      alt={"Parenting The Teen Tribe"}
      className={cn("h-12 w-12 overflow-clip rounded-full", size)}
    />
  );
};
