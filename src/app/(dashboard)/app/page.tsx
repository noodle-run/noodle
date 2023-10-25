import { TypographyH2 } from "@/components/TypographyH2";
import { TypographyP } from "@/components/TypographyP";
import { currentUser } from "@clerk/nextjs";
import { type Metadata } from "next";
import { RecentModules } from "../_components/recent-modules";

export const metadata: Metadata = {
  title: "Dashboard Home",
};

type QuoteType = {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
};

export default async function DashboardHome() {
  const user = await currentUser();

  const quote = await fetch(
    "https://api.quotable.io/random?minLength=100&maxLength=140",
    {
      next: {
        revalidate: 60 * 60 * 24,
      },
    },
  ).then((res) => res.json() as Promise<QuoteType>);

  const date = new Date();
  const currentHour = date.getHours();
  let greeting = "Good evening";

  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
  }

  const greet = `${greeting}${user?.firstName ? `, ${user?.firstName}` : ""}!`;
  const message = `"${quote.content}" - ${quote.author}`;

  return (
    <div>
      <TypographyH2>{greet}</TypographyH2>
      <TypographyP className="max-w-prose opacity-75 [&:not(:first-child)]:mt-2">
        {message}
      </TypographyP>

      <RecentModules />
    </div>
  );
}
