import { TRPCReactProvider } from "@/trpc/client";
import { headers } from "next/headers";
import { type PropsWithChildren } from "react";
import { Navbar } from "../../components/navbar";

export default function WaitlistLayout({ children }: PropsWithChildren) {
  return (
    <TRPCReactProvider headers={headers()}>
      <Navbar />
      {children}
    </TRPCReactProvider>
  );
}
