import { cn } from "@/utils/cn";
import { forwardRef } from "react";

export const TypographyH4 = forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h4">
>(({ className, ...props }, ref) => {
  return (
    <h4
      ref={ref}
      className={cn(
        "mt-2 text-2xl font-semibold tracking-tight lg:text-3xl",
        className,
      )}
      {...props}
    />
  );
});

TypographyH4.displayName = "TypographyH4";
