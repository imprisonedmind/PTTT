import logo from "../../../public/Marketing Logo Blue.avif";
import Image from "next/image";

import { FC } from "react";
import { cn } from "@/lib/utils";

interface LogoCircleProps {
  size?: string;
}

export const LogoCircle: FC<LogoCircleProps> = ({ size }) => {
  return (
    <div
      className={cn("h-12 w-12 overflow-clip rounded-full object-cover", size)}
    >
      <Image
        src={logo}
        alt={"Parenting The Teen Tribe"}
        className={"h-full w-full scale-[1.3]"}
      />
    </div>
  );
};
