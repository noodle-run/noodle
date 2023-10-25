import { type PropsWithChildren } from "react";
import "./styles.css";

export default function LegalLayout({ children }: PropsWithChildren) {
  return (
    <div className="typography prose prose-sm mx-auto my-8 max-w-screen-lg px-6 dark:prose-invert">
      {children}
    </div>
  );
}
