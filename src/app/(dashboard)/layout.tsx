"use client";

import SectionHeader from "@/components/section-header";
import React from "react";
import { usePathname } from "next/navigation";
import Breadcrumb from "@/components/ui/breadcrumb";
import Icon from "@/components/helper/icon";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const pathNames = pathname.split("/").filter((path) => path);

  return (
    <main className="w-full px-8 flex flex-col gap-y-12 h-[calc(100%-112px)] pb-8">
      <div className="flex flex-col gap-y-4">
        <ul className="flex gap-x-2 items-center">
          <li>
            <Breadcrumb name="Dashboard" href={`/`} />
          </li>

          {pathNames.map((path, index) => (
            <React.Fragment key={index}>
              <Icon
                name="MoveRight"
                strokeWidth={1.5}
                className="text-zinc-500 mr-2 "
              />

              <li>
                <Breadcrumb
                  name={path}
                  href={`/${pathNames.slice(0, index + 1).join("/")}`}
                />
              </li>
            </React.Fragment>
          ))}
        </ul>

        <SectionHeader title={pathNames[0] || "client dashboard"} />
      </div>

      <section className="h-full">{children}</section>
    </main>
  );
};

export default Layout;
