"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useLocalStorage } from "@uidotdev/usehooks";

type NotificationSettingsPageProps = {};

const NotificationSettingsPage = async ({}: NotificationSettingsPageProps) => {
  const { theme, themes, setTheme } = useTheme();
  const [accentColor, saveAccentColor] = useLocalStorage("accent", "blue");
  const accentColors = ["blue", "green", "purple"];

  const d = document.documentElement;

  useEffect(() => {
    d.classList.remove(...accentColors);

    d.classList.add(accentColor);
  }, [accentColor]);

  const handleThemeChange = (theme: string) => {
    setTheme(theme);
  };

  // TODO: Font and font size settings
  return (
    <div>
      <div>
        <h3 className="text-xl">Choose your theme</h3>

        <ul className="flex gap-x-4">
          {themes.map((themeOption) => (
            <li
              key={themeOption}
              onClick={() => handleThemeChange(themeOption)}
              className={cn(
                "p-4 rounded-3xl",
                themeOption === theme ? `bg-accent` : `bg-zinc-600`
              )}
            >
              {themeOption}
            </li>
          ))}
        </ul>
      </div>

      <Label htmlFor="accentColor">Accent Color:</Label>

      <RadioGroup
        id="accentColor"
        name="accentColor"
        value={accentColor}
        onValueChange={(value) => saveAccentColor(value)}
      >
        <RadioGroupItem className="text-white" value="blue">
          Blue
        </RadioGroupItem>
        <RadioGroupItem className="text-white" value="green">
          Green
        </RadioGroupItem>
        <RadioGroupItem className="text-white" value="purple">
          Purple
        </RadioGroupItem>
      </RadioGroup>
    </div>
  );
};

export default NotificationSettingsPage;
