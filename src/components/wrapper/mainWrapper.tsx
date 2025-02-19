import { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MainWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const MainWrapper: FC<MainWrapperProps> = ({
  children,
  className,
  id,
}) => {
  return (
    <section className={cn(className, "w-full")} id={id}>
      <div className={"max-w-[1500px] mx-auto w-full h-fit"}>{children}</div>
    </section>
  );
};
