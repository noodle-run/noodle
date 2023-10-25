import { TypographyH2 } from "@/components/TypographyH2";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { AllModules } from "./all-modules";

export default function Page() {
  return (
    <main>
      <TypographyH2>Modules</TypographyH2>
      <ErrorBoundary fallback={<div>Failed to load modules</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <AllModules />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
