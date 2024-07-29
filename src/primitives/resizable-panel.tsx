import { AnimatePresence, motion } from 'framer-motion';
import { type PropsWithChildren } from 'react';
import useResizeObserver from 'use-resize-observer';
const ignoreCircularReferences = () => {
  const seen = new WeakSet();
  return (key: string, value: Record<string, unknown>) => {
    if (key.startsWith('_')) {
      return;
    } // Don't compare React's internal props.
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

export function ResizablePanel({ children }: PropsWithChildren) {
  const { ref, height } = useResizeObserver<HTMLDivElement>();

  return (
    <motion.div
      animate={{ height: height ?? 'auto' }}
      initial={false}
      className="relative w-full overflow-hidden"
    >
      <AnimatePresence initial={false} mode="popLayout">
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
          <div ref={ref}>{children}</div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
