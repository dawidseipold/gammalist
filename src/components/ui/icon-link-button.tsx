import React from "react";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import Icon, { IconNames } from "../helper/icon";
import { VariantProps, cva } from "class-variance-authority";

const iconLinkButtonVariants = cva(
  "flex justify-center items-center bg-icon-link-background hover:bg-icon-link-background-hover text-icon-link-foreground hover:text-icon-link-foreground-hover transition-colors duration-200 ease-in-out",
  {
    variants: {
      size: {
        small: "p-2",
        medium: "p-4",
        large: "p-8",
      },
      roundness: {
        round: "rounded-full",
        semi: "rounded-2xl",
        square: "",
      },
    },
    defaultVariants: {
      size: "medium",
      roundness: "round",
    },
  }
);

interface Props extends LinkProps, VariantProps<typeof iconLinkButtonVariants> {
  href: string;
  icon: IconNames;
  className?: string;
  children: React.ReactNode;
  active?: boolean;
}

const IconLinkButton: React.FC<Props> = ({
  children,
  href,
  icon,
  className,
  active,
  size,
  roundness,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={cn(iconLinkButtonVariants({ size, roundness }), className, {
        ["bg-icon-link-background-active text-icon-link-foreground-active hover:bg-icon-link-background-active-hover hover:text-icon-link-foreground-active-hover"]:
          active,
      })}
      {...props}
    >
      <Icon strokeWidth={2.5} name={icon} />

      {/* {children} */}
    </Link>
  );
};

export default IconLinkButton;
