"use client";

import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Analytics } from "@vercel/analytics/react";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

const Content = () => {
  const [cookies, setCookies] = useLocalStorage<"essential" | "all" | null>(
    "cookies",
    null,
  );

  if (cookies !== null) return null;

  return (
    <div className="fixed bottom-[24px] right-[24px] z-10 flex items-center gap-6 rounded-2xl border-1 border-secondary bg-background px-6 py-5 text-foreground">
      <div>
        <h1 className="pb-1 text-2xl font-extrabold tracking-tighter">
          Cookies
        </h1>
        <p className="max-w-[45ch] text-sm leading-6 text-default-500">
          Hey there, just letting you know, we use cookies on this site to
          ensure that we give you the best experience. You can view our{" "}
          <Link
            as={NextLink}
            href="/cookies"
            className="text-sm underline underline-offset-2"
            color="foreground"
          >
            Cookie Policy
          </Link>{" "}
          for more information.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <Button color="secondary" onClick={() => setCookies("all")}>
          Accept All
        </Button>
        <Button color="secondary" onClick={() => setCookies("essential")}>
          Accept Essentials
        </Button>
      </div>
    </div>
  );
};

export const CookieBanner = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return <Content />;
};

export const NoodleAnalytics = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return <AnalyticsContent />;
};

export const AnalyticsContent = () => {
  const [cookies] = useLocalStorage<"essential" | "all" | null>(
    "cookies",
    null,
  );

  return (
    <Analytics
      beforeSend={(event) => {
        if (cookies === "all") {
          return event;
        }

        return null;
      }}
    />
  );
};
