import { TypographyH2 } from "@/components/TypographyH2";
import { currentUser } from "@clerk/nextjs/server";
import { type Metadata } from "next";
import { Waitlist } from "../../_components/waitlist-table";

export const metadata: Metadata = {
  title: "Dashboard Waitlist",
};

export default async function WaitlistPage() {
  const user = await currentUser();
  const userMetadata = user?.publicMetadata;

  if (userMetadata?.role === "ADMIN") {
    return (
      <div>
        <TypographyH2 className="mb-6">Waitlist</TypographyH2>
        <Waitlist />
      </div>
    );
  }

  return (
    <div>
      <TypographyH2>Not Authorized</TypographyH2>
    </div>
  );
}
