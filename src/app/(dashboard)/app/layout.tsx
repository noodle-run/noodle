import { TRPCReactProvider } from "@/trpc/client";
import { headers } from "next/headers";
import { type PropsWithChildren } from "react";
import { MainDashboardWrapper } from "../_components/main-wrapper";
import { DashboardSideMenu } from "../_components/side-menu";
import { SideMenuProvider } from "../_context/side-menu";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <TRPCReactProvider headers={headers()}>
      <SideMenuProvider>
        <div className="relative flex h-screen w-screen overflow-hidden">
          <DashboardSideMenu />

          <MainDashboardWrapper>{children}</MainDashboardWrapper>
        </div>
      </SideMenuProvider>
    </TRPCReactProvider>
  );
}
