/**
 * Responsive utility functions for consistent scaling across breakpoints.
 * These functions return complete className strings for Tailwind's JIT compiler.
 */

// Text size utilities
export function responsiveText(size: "xs" | "sm" | "base" | "lg" | "xl") {
  const sizes = {
    xs: "text-[10px] sm:text-xs md:text-sm lg:text-base",
    sm: "text-xs sm:text-sm md:text-base lg:text-lg",
    base: "text-sm sm:text-base md:text-lg lg:text-xl",
    lg: "text-base sm:text-lg md:text-xl lg:text-2xl",
    xl: "text-lg sm:text-xl md:text-2xl lg:text-3xl",
  };
  return sizes[size];
}

// Line height utilities (typically paired with text sizes)
export function responsiveLeading(size: "xs" | "sm" | "base" | "lg" | "xl") {
  const leading = {
    xs: "leading-4 sm:leading-5 md:leading-6 lg:leading-7",
    sm: "leading-4 sm:leading-5 md:leading-6 lg:leading-7",
    base: "leading-5 sm:leading-6 md:leading-7 lg:leading-8",
    lg: "leading-6 sm:leading-7 md:leading-8 lg:leading-9",
    xl: "leading-7 sm:leading-8 md:leading-9 lg:leading-10",
  };
  return leading[size];
}

// Combined text with leading
export function responsiveTextFull(size: "xs" | "sm" | "base" | "lg" | "xl") {
  return `${responsiveText(size)} ${responsiveLeading(size)}`;
}

// Padding utilities
export function responsivePx(size: "xs" | "sm" | "base" | "lg") {
  const padding = {
    xs: "px-1 sm:px-1.5 md:px-2 lg:px-2.5",
    sm: "px-1.5 sm:px-2 md:px-2.5 lg:px-3",
    base: "px-2 sm:px-2.5 md:px-3 lg:px-3.5",
    lg: "px-3 sm:px-4 md:px-5 lg:px-6",
  };
  return padding[size];
}

export function responsivePy(size: "xs" | "sm" | "base" | "lg") {
  const padding = {
    xs: "py-0.5 sm:py-1 md:py-1.5 lg:py-2",
    sm: "py-0.5 sm:py-1 md:py-1.5 lg:py-2",
    base: "py-1 sm:py-1.5 md:py-2 lg:py-2.5",
    lg: "py-3 sm:py-4 md:py-5 lg:py-6",
  };
  return padding[size];
}

export function responsivePadding(size: "xs" | "sm" | "base" | "lg") {
  return `${responsivePx(size)} ${responsivePy(size)}`;
}

export function responsiveP(size: "xs" | "sm" | "base" | "lg") {
  const padding = {
    xs: "p-1 sm:p-1.5 md:p-2 lg:p-2.5",
    sm: "p-2 sm:p-2.5 md:p-3 lg:p-3.5",
    base: "p-3 sm:p-4 md:p-5 lg:p-6",
    lg: "p-4 sm:p-5 md:p-6 lg:p-7",
  };
  return padding[size];
}

// Gap utilities
export function responsiveGap(size: "xs" | "sm" | "base" | "lg") {
  const gaps = {
    xs: "gap-1 sm:gap-1.5 md:gap-2 lg:gap-2.5",
    sm: "gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5",
    base: "gap-3 sm:gap-4 md:gap-5 lg:gap-6",
    lg: "gap-4 sm:gap-5 md:gap-6 lg:gap-7",
  };
  return gaps[size];
}

// Border radius utilities
export function responsiveRounded(size: "sm" | "base" | "lg") {
  const rounded = {
    sm: "rounded-xs sm:rounded-sm md:rounded lg:rounded-md",
    base: "rounded-sm sm:rounded md:rounded-md lg:rounded-lg",
    lg: "rounded sm:rounded-md md:rounded-lg lg:rounded-xl",
  };
  return rounded[size];
}

// Icon size utilities
export function responsiveIconSize(size: "xs" | "sm" | "base" | "lg") {
  const sizes = {
    xs: "size-3 sm:size-4 md:size-5 lg:size-6",
    sm: "size-4 sm:size-5 md:size-6 lg:size-7",
    base: "size-5 sm:size-6 md:size-7 lg:size-8",
    lg: "size-6 sm:size-7 md:size-8 lg:size-9",
  };
  return sizes[size];
}
