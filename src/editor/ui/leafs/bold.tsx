import { PlateLeaf, type PlateLeafProps } from "@udecode/plate-common";
import React from "react";

import { cn } from "@/utils/cn";

const BoldLeaf = React.forwardRef<
  React.ElementRef<typeof PlateLeaf>,
  PlateLeafProps
>(({ className, children, ...props }: PlateLeafProps, ref) => {
  return (
    <PlateLeaf
      ref={ref}
      className={cn("text-default-900", className)}
      asChild
      {...props}
    >
      <strong>{children}</strong>
    </PlateLeaf>
  );
});

BoldLeaf.displayName = "BoldLeaf";

export { BoldLeaf };
