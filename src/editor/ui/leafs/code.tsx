import { PlateLeaf, type PlateLeafProps } from "@udecode/plate-common";
import React from "react";

import { cn } from "@/utils/cn";

const CodeLeaf = React.forwardRef<
  React.ElementRef<typeof PlateLeaf>,
  PlateLeafProps
>(({ className, children, ...props }: PlateLeafProps, ref) => {
  return (
    <PlateLeaf
      ref={ref}
      className={cn(
        "rounded-md border border-default-200 bg-default-100 px-1.5 py-0.5 text-sm font-medium text-default-500",
        className,
      )}
      asChild
      {...props}
    >
      <code>{children}</code>
    </PlateLeaf>
  );
});

CodeLeaf.displayName = "CodeLeaf";

export { CodeLeaf };
