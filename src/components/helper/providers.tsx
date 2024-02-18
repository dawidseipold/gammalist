"use client";

import { useEffect } from "react";
import { ThemeProvider } from "./theme-provider";
import { useLocalStorage } from "@uidotdev/usehooks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  const [accentColor] = useLocalStorage("accent", "blue");
  const d = document.documentElement;
  d.classList.add(accentColor);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
