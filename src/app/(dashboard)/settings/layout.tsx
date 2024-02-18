"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const ITEMS = [
  {
    name: "Account",
    href: "/settings",
  },
  {
    name: "Appearence",
    href: "/settings/appearence",
  },
  {
    name: "Security",
    href: "/settings/security",
  },
  {
    name: "Notifications",
    href: "/settings/notifications",
  },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="flex gap-x-8">
      {/* TODO: Make a component for the menu and remove use client from here. */}
      <ul className="flex flex-col gap-y-2 min-w-48">
        {ITEMS.map((item, index) => (
          <li
            key={index}
            className={cn(
              "px-4 py-2 rounded-xl text-lg font-semibold tracking-wide",
              pathname === item.href && "bg-"
            )}
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-y-8">
        <h2 className="capitalize text-3xl">
          {pathname
            .split("/")
            .filter((path) => path)
            .pop()}
        </h2>

        {children}
      </div>
    </div>
  );
};

export default Layout;
