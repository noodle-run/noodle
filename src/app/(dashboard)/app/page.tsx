import { TypographyH2 } from "@/components/TypographyH2";
import { TypographyP } from "@/components/TypographyP";
import { formatDate } from "@/utils/formatDate";
import { currentUser } from "@clerk/nextjs";
import { type Metadata } from "next";
import { RecentModules } from "../_components/recent-modules";
import { NotebookTable } from "./_components/notebook-table";
import { WeatherData } from "./_components/weather";

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
    <div className="grid h-full grid-cols-[1fr_auto] gap-6 overflow-hidden pb-8">
      <div className="flex flex-col">
        <TypographyH2>{greet}</TypographyH2>
        <TypographyP className="max-w-prose opacity-75 [&:not(:first-child)]:mt-2">
          {message}
        </TypographyP>

        <RecentModules />

        <h2 className="mb-2 mt-6 text-large font-semibold">Notebooks</h2>
        <div className="relative flex h-full flex-col overflow-y-auto">
          <div className="flex-grow-1 flex-basis-auto absolute h-full w-full flex-shrink-0 overflow-y-scroll rounded-xl border border-default-200 dark:border-default-50">
            <NotebookTable />
          </div>
        </div>
      </div>

      <div className="mt-8 w-[310px] rounded-2xl border border-default-200 p-6 dark:border-default-50">
        <span className="text-tiny text-default-500">It&apos;s</span>
        <h3 className="font-medium text-amber-500">{formatDate(new Date())}</h3>
        <WeatherData />
      </div>
    </div>
  );
}
