import { TypographyH1 } from "@/components/TypographyH1";
import { TypographyP } from "@/components/TypographyP";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { ArrowDownIcon, GithubIcon, MoveRightIcon } from "lucide-react";
import NextLink from "next/link";
import { Fragment } from "react";
import { features, siteConfig } from "../config";
import { FaqAccordion } from "./_components/faq";
import { FeatureCard } from "./_components/feature-card";
import { Preview } from "./_components/preview";

export default function Home() {
  return (
    <Fragment>
      <section
        id="hero"
        className="flex flex-col items-center px-6 pt-16 text-center md:pt-24 lg:pt-32"
      >
        <Button
          as={Link}
          isExternal
          href={siteConfig.github}
          variant="faded"
          radius="full"
          endContent={<GithubIcon size={16} />}
        >
          Star us on Github
        </Button>
        <TypographyH1 className="mt-6">{siteConfig.tagline}</TypographyH1>
        <TypographyP className="max-w-[75ch] text-sm md:text-base">
          {siteConfig.description}
        </TypographyP>

        <div className="mt-6 flex w-full flex-col flex-wrap items-center justify-center gap-4 lg:flex-row">
          <Button
            className="w-full lg:w-auto"
            as={Link}
            href="#features"
            variant="faded"
            endContent={<ArrowDownIcon size={20} />}
            size="lg"
            radius="sm"
          >
            Features
          </Button>
          <Button
            className="w-full font-semibold lg:w-auto"
            as={NextLink}
            href="/waitlist"
            color="primary"
            endContent={<MoveRightIcon size={20} />}
            size="lg"
            radius="sm"
          >
            Join Waitlist
          </Button>
        </div>
      </section>

      <section id="preview">
        <Preview />
      </section>

      <section
        id="features"
        className="container mx-auto mt-24 px-6 md:mt-36 lg:mt-56"
      >
        <TypographyH1 className="mx-auto max-w-[18ch] text-center">
          A new era of productive students begins.
        </TypographyH1>
        <TypographyP className="mx-auto max-w-[60ch] text-center">
          Noodle is designed to keep you on top of your education, with powerful
          insights and automations, you&apos;ll never miss a thing again.
        </TypographyP>

        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-7 lg:grid-rows-2 lg:grid-areas-featuresWide">
          {features.map((feature, i) => (
            <FeatureCard key={`${feature.title}-${i}`} {...feature} />
          ))}
        </div>
      </section>

      <section
        id="mission"
        className="mx-auto mt-36 flex max-w-screen-lg flex-col gap-8 px-6 lg:mt-56"
      >
        <TypographyH1 className="mx-auto max-w-[16ch] text-center">
          Discussing the elephant in the blender
        </TypographyH1>
        <TypographyP className="mx-auto leading-7 lg:max-w-[80ch]">
          You know that friend that you talk about the future with? <br />{" "}
          <br /> Well we&apos;re two friends, Ahmed and Sinclair that talk about
          the future. We came up with Noodle while talking about how great it
          would be to have a single platform that could make studies easier
          through cross compatibility. <br /> <br />
          You see we&apos;re not lazy, we just love when things work together
          properly. Noodle as you see it is the result of hours of discussions,
          hours of running ideas, talking with many fellow students. <br />{" "}
          <br /> We wanted a platform that could manage your notes in an easy to
          use way, give us information about where we are so we know where to
          go. Flash cards integrated with to do&apos;s, with calendars and so
          much more. What you see as Noodle is only&apos;the&apos;beginning.{" "}
          <br /> <br /> We say blender as that we see Noodle becoming a blend of
          everything that we needed while pursuing our degrees to keep on top of
          everything.
        </TypographyP>
      </section>

      <section
        id="faq"
        className="mx-auto mt-36 flex max-w-screen-lg flex-col gap-6 px-6 lg:mt-56"
      >
        <TypographyH1 className="mx-auto max-w-[20ch] text-center text-5xl font-extrabold tracking-tighter md:text-6xl">
          You probably got many questions for us...
        </TypographyH1>
        <TypographyP className="mx-auto max-w-[60ch] text-center leading-7">
          So here&apos;s a list of things we think you might be wondering about
          when it comes to Noodle. If there are any more I guess too bad.
        </TypographyP>
        <div className="mx-auto w-full pt-6 lg:w-2/3">
          <FaqAccordion />
        </div>
      </section>

      <section className="mt-12 bg-primary py-8 text-white dark:text-black lg:py-12">
        <div className="container mx-auto px-6">
          <TypographyH1 className="max-w-[15ch]">
            How about we take a minute of your time?
          </TypographyH1>
          <TypographyP className="max-w-[65ch] font-semibold">
            It would mean the world to us if you think Noodle will impact your
            productivity for the better and would sign up to our waiting list.
            We are working hard to deliver Noodle as soon as possible so that we
            can improve student productivity as soon as possible.
          </TypographyP>
          <Button
            as={NextLink}
            href="/waitlist"
            endContent={<MoveRightIcon size={20} />}
            className="mt-6 bg-white font-semibold text-primary dark:bg-black"
            size="lg"
            radius="sm"
          >
            Join the Waitlist!
          </Button>
        </div>
      </section>
    </Fragment>
  );
}
