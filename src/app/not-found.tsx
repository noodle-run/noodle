import { Navbar } from "@/components/navbar";
import { Button } from "@nextui-org/button";
import { MoveRightIcon } from "lucide-react";
import NextLink from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1 flex-col justify-center gap-3 px-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tighter md:text-5xl lg:text-6xl xl:text-7xl">
          😴 <br /> Not Found
        </h1>
        <p className="mx-auto max-w-[45ch] text-sm text-default-500 lg:text-base">
          According to our very accurate records, the page you&apos;re trying to
          access does not exist.
        </p>

        <div className="mx-auto">
          <Button
            as={NextLink}
            href="/"
            color="primary"
            endContent={<MoveRightIcon size={18} strokeWidth={2} />}
            className="font-medium"
            radius="sm"
          >
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
}
