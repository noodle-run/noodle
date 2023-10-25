import { ignoreCircularReferences } from "@/utils/ignoreCircularReferences";
import { AnimatePresence, motion } from "framer-motion";
import { type PropsWithChildren } from "react";
import useResizeObserver from "use-resize-observer";

export function ResizablePanel({ children }: PropsWithChildren) {
  const { ref, height } = useResizeObserver<HTMLDivElement>();

  return (
    <motion.div
      animate={{ height: height ?? "auto" }}
      className="relative w-full overflow-hidden"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={JSON.stringify(children, ignoreCircularReferences())}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          <div ref={ref} className={height ? "absolute" : "relative"}>
            {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
