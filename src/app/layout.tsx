import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const Providers = dynamic(() => import("@/components/helper/providers"), {
  ssr: false,
});

const urbanist = Urbanist({
  subsets: ["latin"],
  // weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(urbanist.className, "flex bg-background")}>
        <Providers>
          <Sidebar elements={[]} />

          <div className="w-full">
            <Header items={[]} />

            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
