import { cn } from "@/utils/cn";
import { forwardRef } from "react";

export const TypographyH3 = forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h3">
>(({ className, ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={cn(
        "mt-6 text-3xl font-bold tracking-tight lg:text-4xl",
        className,
      )}
      {...props}
    />
  );
});

TypographyH3.displayName = "TypographyH3";
