"use client";

import Tasks from "./_components/tasks";
import { TypographyH2 } from "@/components/TypographyH2";
import { trpc } from "@/trpc/client";
import { Suspense, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { toast } from "sonner";
import { Heading } from "./_components/heading";
import NavItem from "./_components/nav-item";
import { FilesIcon, ListTodoIcon } from "lucide-react";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
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
    <ErrorBoundary fallback={<TypographyH2>Something went wrong</TypographyH2>}>
      <main className="flex min-h-full pl-2">
        <div className="flex-grow">
          <Suspense fallback={<TypographyH2>Loading...</TypographyH2>}>
            <Heading id={Number(params.id)} />
          </Suspense>
          <div className="m-2 flex gap-8 rounded border border-gray-900 p-2 px-4">
            <NavItem
              name="Tasks"
              href={`/app/modules/${id}`}
              Icon={ListTodoIcon}
            />
            <NavItem
              name="Notebooks"
              href={`/app/modules/${id}/notebooks`}
              Icon={FilesIcon}
            />
          </div>
          {children}
        </div>
        <Suspense>
          <Tasks id={params.id} />
        </Suspense>
      </main>
    </ErrorBoundary>
  );
}
