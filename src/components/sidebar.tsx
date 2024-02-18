"use client";

import React from "react";
import IconLinkButton from "./ui/icon-link-button";
import { Home, LucideIcon } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { usePathname } from "next/navigation";
import { IconNames } from "./helper/icon";

type SidebarProps = {
  elements: {
    name: string;
    href: string;
    icon: IconNames;
  }[];
};

const Sidebar: React.FC<SidebarProps> = ({ elements }) => {
  const pathname = usePathname();
  const pathNames = pathname.split("/").filter((path) => path);

  elements = [
    { name: "overview", href: "/", icon: "Home" },
    { name: "discover", href: "/discover", icon: "Compass" },
    { name: "calendar", href: "/calendar", icon: "Calendar" },
    { name: "forum", href: "/forum", icon: "MessageSquare" },
    { name: "lists", href: "/lists", icon: "List" },
    { name: "settings", href: "/settings", icon: "Settings" },
  ];

  return (
    <nav className="h-screen w-max px-8 relative">
      <div className="absolute left-8 top-8 w-12 h-12 bg-white rounded-xl" />

      <ul className="flex flex-col gap-y-4 justify-center items-center h-full">
        {elements.map((element, index) => (
          <IconLinkButton
            key={index}
            href={`${element.href}`}
            icon={element.icon}
            active={element.href === `/${pathNames[0] || ""}`}
          >
            {element.name}
          </IconLinkButton>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
