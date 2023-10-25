"use client";

import { Icon, type IconNames, type iconNames } from "@/components/icon";
import { ScrollArea } from "@/components/scroll-area";
import { cn } from "@/utils/cn";
import { Button } from "@nextui-org/react";
import { useVirtualizer } from "@tanstack/react-virtual";
import {
  Fragment,
  useRef,
  type Dispatch,
  type FC,
  type SetStateAction,
} from "react";

export const IconsGrid: FC<{
  icons: typeof iconNames;
  setStep: Dispatch<SetStateAction<number>>;
  setIcon: Dispatch<SetStateAction<IconNames>>;
}> = ({ icons, setIcon, setStep }) => {
  const ref = useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: Math.ceil(icons.length / 6),
    getScrollElement: () => ref.current,
    estimateSize: () => 40,
    overscan: 6,
  });

  const columnVirtualizer = useVirtualizer({
    horizontal: true,
    count: 7,
    getScrollElement: () => ref.current,
    estimateSize: () => 40,
    overscan: 6,
  });

  return (
    <>
      <ScrollArea ref={ref} className="h-[320px] w-[285px]">
        <div
          className={cn("relative")}
          style={{
            width: `${columnVirtualizer.getTotalSize()}px`,
            height: `${rowVirtualizer.getTotalSize()}px`,
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => (
            <Fragment key={virtualRow.index}>
              {columnVirtualizer.getVirtualItems().map((virtualColumn) => (
                <div
                  key={virtualColumn.index}
                  className={cn("absolute left-0 top-0")}
                  style={{
                    width: `${virtualColumn.size}px`,
                    height: `${virtualRow.size}px`,
                    transform: `translateX(${virtualColumn.start}px) translateY(${virtualRow.start}px)`,
                  }}
                >
                  <Button
                    variant="light"
                    isIconOnly
                    size="sm"
                    onClick={() => {
                      setStep(0);
                      setIcon(
                        icons[virtualRow.index * 6 + virtualColumn.index]!,
                      );
                    }}
                  >
                    <Icon
                      name={icons[virtualRow.index * 6 + virtualColumn.index]!}
                      size={24}
                    />
                  </Button>
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </ScrollArea>
    </>
  );
};
