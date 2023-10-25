"use client";

import { TypographyH2 } from "@/components/TypographyH2";
import { trpc } from "@/trpc/client";
import { Suspense, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { toast } from "sonner";
import { Heading } from "./_components/heading";

export default function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const { mutate, error } = trpc.module.post.updateLastVisited.useMutation();

  useEffect(() => {
    if (!error) {
      mutate({ id });
    }

    if (error) {
      toast.error(
        "Something went wrong while trying to update the module last visited date...",
      );
    }
  }, [id, mutate, error]);

  return (
    <main className="pl-2">
      <ErrorBoundary
        fallback={<TypographyH2>Something went wrong</TypographyH2>}
      >
        <Suspense fallback={<TypographyH2>Loading...</TypographyH2>}>
          <Heading id={Number(params.id)} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
