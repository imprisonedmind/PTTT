import { FC } from "react";
import Link from "next/link";

interface NavbarItemProps {
  title: string;
  href: string;
}

export const NavbarItem: FC<NavbarItemProps> = ({ title, href }) => {
  return (
    <li className="hover:text-red-500 cursor-pointer">
      {<Link href={href}>{title}</Link>}
    </li>
  );
};
