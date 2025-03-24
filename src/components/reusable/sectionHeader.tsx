import React, { FC } from "react";

interface SectionHeaderProps {
  title?: string;
  description: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col text-center w-full mb-20">
      {title && (
        <h2 className="text-xs text-primary tracking-widest font-medium title-font mb-1">
          {title}
        </h2>
      )}
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
        {description}
      </h1>
    </div>
  );
};
