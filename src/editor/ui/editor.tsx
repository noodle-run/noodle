import { PlateContent } from "@udecode/plate-common";
import React from "react";

import { cn } from "@/utils/cn";
import type { PlateContentProps } from "@udecode/plate-common";

const Editor = React.forwardRef<HTMLDivElement, PlateContentProps>(
  ({ className, disabled, readOnly, ...props }, ref) => {
    return (
      <div ref={ref} className="relative w-full">
        <PlateContent
          className={cn(
            className,
            "relative h-full w-full overflow-x-auto whitespace-pre-wrap break-words rounded-md px-2 py-8 outline-none [&_[data-slate-placeholder]]:top-[auto_!important] [&_[data-slate-placeholder]]:text-default-300 [&_[data-slate-placeholder]]:!opacity-100",
          )}
          disableDefaultStyles
          readOnly={disabled ?? readOnly}
          aria-disabled={disabled}
          {...props}
        />
      </div>
    );
  },
);

Editor.displayName = "Editor";

export { Editor };
