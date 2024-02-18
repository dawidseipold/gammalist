"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, themes, setTheme } = useTheme();

  return (
    <div className="grid-cols-7 grid-rows-2 grid gap-8 h-full">
      <div className="col-span-2 row-span-2 bg-red-500 p-8 rounded-2xl">1</div>
      <div className="col-span-2 row-span-1 bg-red-500 p-8 rounded-2xl">2</div>
      <div className="col-span-2 row-span-1 bg-red-500 p-8 rounded-2xl">3</div>
      <div className="col-span-1 row-span-1 bg-red-500 p-8 rounded-2xl">4</div>
      <div className="col-span-3 row-span-1 bg-red-500 p-8 rounded-2xl">5</div>
      <div className="col-span-2 row-span-1 bg-red-500 p-8 rounded-2xl">6</div>
    </div>
  );
}
