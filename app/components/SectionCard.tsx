import type { ReactNode } from "react";
import { responsiveGap, responsiveP, responsiveRounded, responsiveTextFull } from "utils";

interface SectionCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
}

export function SectionCard({
  icon,
  title,
  description,
  children,
  className = "",
}: SectionCardProps) {
  return (
    <div
      className={`bg-background-alt flex flex-col ${responsiveGap("sm")} ${responsiveP("base")} ${responsiveRounded("base")} w-full ${className}`}
    >
      <div className={`flex flex-col ${responsiveGap("xs")}`}>
        <div className={`flex ${responsiveGap("xs")} items-center font-medium ${responsiveTextFull("base")} text-text`}>
          {icon}
          {title}
        </div>
        <div className={`flex w-full font-light ${responsiveTextFull("xs")} text-text-alt`}>
          {description}
        </div>
      </div>

      {children}
    </div>
  );
}
