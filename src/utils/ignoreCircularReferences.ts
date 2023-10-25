export const ignoreCircularReferences = () => {
  const seen = new WeakSet();
  return (key: string, value: Record<string, unknown>) => {
    if (key.startsWith("_")) return; // Don't compare React's internal props.
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) return;
      seen.add(value);
    }
    return value;
  };
};
