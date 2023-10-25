import { cn } from "@/utils/cn";
import { forwardRef } from "react";

export const TypographyP = forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<"p">
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  );
});

TypographyP.displayName = "TypographyP";
