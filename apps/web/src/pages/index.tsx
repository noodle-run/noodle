import { Balancer } from 'react-wrap-balancer';
import type { FC, MouseEventHandler, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from 'usehooks-ts';

import { cn } from '@noodle/utils';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/Accordion';
import { Icon } from '@/components/Icon';
import { Navbar } from '@/components/Navbar';
import { constants } from '@/utils/constants';
import { type NextPageWithLayout } from '@/utils/NextPageWithLayout';

type FeatureCardProps = {
  emoji: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
};

const FeatureCard: FC<FeatureCardProps> = ({
  children,
  emoji,
  title,
  className,
}) => {
  return (
    <div
      className={cn(
        className,
        'from-gray-2 dark:from-graydark-2 via-gray-3 dark:via-graydark-3 to-gray-2 dark:to-graydark-2 border-gray-6 dark:border-graydark-6 rounded-xl border bg-gradient-to-br px-8 py-9',
      )}
    >
      <h2 className="text-3xl font-extrabold">{emoji}</h2>
      <h2 className="py-4 text-2xl font-extrabold">{title}</h2>
      <div className="text-gray-11 dark:text-graydark-11 text-sm leading-6">
        {children}
      </div>
    </div>
  );
};

const features: FeatureCardProps[] = [
  {
    emoji: (
      <span role="img" aria-label="chart increasing">
        📈
      </span>
    ),
    className: 'lg:grid-in-leftTop',
    title: 'Insights & Analytics',
    children: (
      <p>
        Indulged in the art of procrastination all week? Brace yourself for the
        truth: zero accomplishments. Prepare to be awestruck.
      </p>
    ),
  },
  {
    emoji: (
      <span role="img" aria-label="high voltage">
        ⚡
      </span>
    ),
    title: 'Powerful Note Taking',
    className: 'lg:grid-in-centerTop',
    children: (
      <p>
        Brace yourself! Experience note-taking that defies gravity. Get ready to
        be smitten by its remarkable charm, leaving those pen-and-paper users in
        lectures questioning their existence.
      </p>
    ),
  },
  {
    emoji: (
      <span role="img" aria-label="card file box">
        🗃
      </span>
    ),
    className: 'lg:grid-in-right',
    title: 'Flashcards',
    children: (
      <p>
        Guess what? Noodle doesn&apos;t do ordinary flashcards. No, no,
        we&apos;ve revolutionized the game. <br /> <br /> Say goodbye to the
        tedious task of creating your own flashcards. With Noodle, as you jot
        down your notes, like magic, we&apos;ll conjure up customized flashcards
        for you. <br /> <br /> But here&apos;s the thing, don&apos;t you even
        think about slacking off on your flashcard homework. Our AI takes it
        personally, and trust me, you don&apos;t want to face the wrath of a
        peeved AI.
      </p>
    ),
  },
  {
    emoji: (
      <span role="img" aria-label="brain">
        🧠
      </span>
    ),
    title: 'AI this & Automations that',
    className: 'lg:grid-in-leftBottom',
    children: (
      <p>
        Embrace the brilliance of our wonderfully mediocre AI! It&apos;s here to
        save the day, helping you fix mistakes and put information in the right
        place. Because, you know, we get it—you&apos;re not the sharpest tool in
        the shed.
      </p>
    ),
  },
  {
    emoji: (
      <span role="img" aria-label="man technologist">
        👨‍💻
      </span>
    ),
    title: 'Open Source',
    className: 'lg:grid-in-centerBottom',
    children: (
      <p>
        Apart from the glamour of being open source, Noodle&apos;s codebase is
        actually open for contributions I mean if you even dare!
      </p>
    ),
  },
];

const smoothScrollToId =
  (id: string): MouseEventHandler<HTMLAnchorElement> =>
  (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({
        top: (document.getElementById(id)?.offsetTop ?? 0) - 150,
        behavior: 'smooth',
      });
    }
  };

const Home: NextPageWithLayout = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <main>
      <header className="container mx-auto flex flex-col items-center justify-center gap-6 pt-36 text-center lg:pt-48">
        <a
          href={constants.github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-4 border-gray-8 dark:bg-graydark-4 dark:border-graydark-8 dark:hover:bg-graydark-5 hover:bg-gray-5 flex items-center gap-4 rounded-full border px-3 py-2 text-sm transition-colors"
        >
          Star us on Github{' '}
          <Icon
            name="star"
            size={13}
            className="fill-primary-500 stroke-primary-500"
          />
        </a>
        <h1 className="text-5xl font-extrabold tracking-tighter md:text-6xl">
          <Balancer>{constants.tagline}</Balancer>
        </h1>
        <p className="text-gray-11 dark:text-graydark-11 leading-normal tracking-tight md:text-base md:leading-7">
          <Balancer>
            {isMobile ? constants.shortDescription : constants.description}
          </Balancer>
        </p>
        <div className="flex w-full flex-col items-center gap-4 lg:w-auto lg:flex-row lg:gap-6">
          <Link
            href="/#features"
            onClick={smoothScrollToId('features')}
            className="bg-gray-4 border-gray-6 dark:bg-graydark-4 dark:border-graydark-6 dark:hover:bg-graydark-5 hover:bg-gray-5 flex w-full items-center justify-center gap-4 rounded-md border px-6 py-3 font-semibold transition-colors lg:w-auto"
          >
            Features <Icon name="arrow-down" size={20} />
          </Link>
          <Link
            href="/waitlist"
            className="bg-primary-500 text-gray-12 hover:bg-primary-700 flex w-full items-center justify-center gap-4 rounded-md px-6 py-3 font-semibold transition-colors lg:w-auto"
          >
            Join Waitlist <Icon name="arrow-right" size={20} />
          </Link>
        </div>
      </header>
      <div className="relative mt-20 flex w-full justify-center sm:mt-24 md:mt-28 lg:mt-32">
        <div className="z-10 flex justify-center px-4">
          <Image
            src="/preview.png"
            width={1919 * 0.65}
            height={1080 * 0.65}
            className="shadow-primary-500/20 rounded-lg shadow-[0_100px_200px_75px]"
            alt="Dashboard Preview"
          />
        </div>
        <svg
          className="absolute -bottom-[15%] w-full"
          viewBox="0 0 1919 377"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 368.265L35.6081 355.891C71.003 343.305 142.219 318.558 213.222 309.171C284.225 299.998 355.441 306.398 426.444 303.625C497.447 300.638 568.664 288.691 639.667 302.131C710.67 315.571 781.886 354.825 852.889 353.331C923.892 351.838 995.108 310.025 1066.11 290.398C1137.11 270.771 1208.33 273.758 1279.33 295.731C1350.34 317.705 1421.55 359.091 1492.56 371.891C1563.56 384.691 1634.77 368.905 1705.78 364.425C1776.78 359.731 1848 366.131 1883.39 369.331L1919 372.531V176.265H1883.39C1848 176.265 1776.78 176.265 1705.78 176.265C1634.77 176.265 1563.56 176.265 1492.56 176.265C1421.55 176.265 1350.34 176.265 1279.33 176.265C1208.33 176.265 1137.11 176.265 1066.11 176.265C995.108 176.265 923.892 176.265 852.889 176.265C781.886 176.265 710.67 176.265 639.667 176.265C568.664 176.265 497.447 176.265 426.444 176.265C355.441 176.265 284.225 176.265 213.222 176.265C142.219 176.265 71.003 176.265 35.6081 176.265H0V368.265Z"
            fill="#E64F6D"
          />
          <path
            d="M0 8.53113L35.6081 20.9044C71.003 33.4911 142.219 58.2378 213.222 67.6245C284.225 76.7978 355.441 70.3978 426.444 73.1711C497.447 76.1578 568.664 88.1045 639.667 74.6645C710.67 61.2245 781.886 21.9711 852.889 23.4645C923.892 24.9578 995.108 66.7711 1066.11 86.3978C1137.11 106.024 1208.33 103.038 1279.33 81.0645C1350.34 59.0911 1421.55 17.7044 1492.56 4.90444C1563.56 -7.89556 1634.77 7.8911 1705.78 12.3711C1776.78 17.0644 1848 10.6645 1883.39 7.46446L1919 4.26446V200.531H1883.39C1848 200.531 1776.78 200.531 1705.78 200.531C1634.77 200.531 1563.56 200.531 1492.56 200.531C1421.55 200.531 1350.34 200.531 1279.33 200.531C1208.33 200.531 1137.11 200.531 1066.11 200.531C995.108 200.531 923.892 200.531 852.889 200.531C781.886 200.531 710.67 200.531 639.667 200.531C568.664 200.531 497.447 200.531 426.444 200.531C355.441 200.531 284.225 200.531 213.222 200.531C142.219 200.531 71.003 200.531 35.6081 200.531H0V8.53113Z"
            fill="#E64F6D"
          />
          <path
            d="M0 145.064L35.6081 140.158C71.003 135.038 142.219 125.224 213.222 124.798C284.225 124.371 355.441 133.758 426.444 135.464C497.447 137.171 568.664 131.624 639.667 121.598C710.67 111.571 781.886 97.4912 852.889 87.8912C923.892 78.2912 995.108 73.1712 1066.11 77.2245C1137.11 81.0645 1208.33 93.8645 1279.33 101.758C1350.34 109.438 1421.55 112.424 1492.56 113.704C1563.56 115.198 1634.77 115.198 1705.78 119.891C1776.78 124.371 1848 133.758 1883.39 138.238L1919 142.931V200.531H1883.39C1848 200.531 1776.78 200.531 1705.78 200.531C1634.77 200.531 1563.56 200.531 1492.56 200.531C1421.55 200.531 1350.34 200.531 1279.33 200.531C1208.33 200.531 1137.11 200.531 1066.11 200.531C995.108 200.531 923.892 200.531 852.889 200.531C781.886 200.531 710.67 200.531 639.667 200.531C568.664 200.531 497.447 200.531 426.444 200.531C355.441 200.531 284.225 200.531 213.222 200.531C142.219 200.531 71.003 200.531 35.6081 200.531H0V145.064Z"
            fill="#D03472"
          />
        </svg>
      </div>
      <section
        id="features"
        className="container mx-auto mt-36 flex flex-col gap-6 lg:mt-56"
      >
        <h1 className="mx-auto max-w-[20ch] text-center text-5xl font-extrabold tracking-tighter md:text-6xl">
          <Balancer>A new era of productive students begins.</Balancer>
        </h1>
        <p className="text-gray-11 dark:text-graydark-11 mx-auto max-w-[70ch] text-center leading-normal tracking-tight md:text-base md:leading-7">
          <Balancer>
            Noodle is designed to keep you on top of your education, with
            powerful insights and automations, you&apos;ll never miss a thing
            again.
          </Balancer>
        </p>
        <div className="lg:grid-areas-featuresWide grid grid-cols-1 gap-8 lg:grid-cols-7 lg:grid-rows-2">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>
      <section
        id="mission"
        className="container mx-auto mt-36 flex flex-col gap-8 lg:mt-56"
      >
        <h1 className="mx-auto max-w-[20ch] text-center text-5xl font-extrabold tracking-tighter md:text-6xl">
          <Balancer>Discussing the elephant in the blender</Balancer>
        </h1>
        <p className="text-gray-11 dark:text-graydark-11 mx-auto leading-7 lg:max-w-[80ch]">
          <Balancer>
            You know that friend that you talk about the future with? <br />{' '}
            <br /> Well we&apos;re two friends, Ahmed and Sinclair that talk
            about the future. We came up with Noodle while talking about how
            great it would be to have a single platform that could make studies
            easier through cross compatibility. <br /> <br />
            You see we&apos;re not lazy, we just love when things work together
            properly. Noodle as you see it is the result of hours of
            discussions, hours of running ideas, talking with many fellow
            students. <br /> <br /> We wanted a platform that could manage your
            notes in an easy to use way, give us information about where we are
            so we know where to go. Flash cards integrated with to do&apos;s,
            with calendars and so much more. What you see as Noodle is
            only&apos;the&apos;beginning. <br /> <br /> We say blender as that
            we see Noodle becoming a blend of everything that we needed while
            pursuing our degrees to keep on top of everything.
          </Balancer>
        </p>
      </section>
      <section
        id="faq"
        className="container mx-auto mt-36 flex flex-col gap-6 lg:mt-56"
      >
        <h1 className="mx-auto max-w-[20ch] text-center text-5xl font-extrabold tracking-tighter md:text-6xl">
          <Balancer>You probably got many questions for us...</Balancer>
        </h1>
        <p className="text-gray-11 dark:text-graydark-11 mx-auto max-w-[80ch] text-center leading-7">
          <Balancer>
            So here&apos;s a list of things we think you might be wondering
            about when it comes to Noodle. If there are any more I guess too
            bad.
          </Balancer>
        </p>
        <div className="mx-auto w-full pt-6 lg:w-1/2">
          <Accordion type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger>Why is the name Noodle</AccordionTrigger>
              <AccordionContent>
                The name came up from our usage of the platform Moodle
                throughout our university years. We wanted to build something
                with our idea for this platform and the name Noodle came up as a
                joke. We liked it and it stuck.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it an LMS platform</AccordionTrigger>
              <AccordionContent>
                The simple answer is no, we are not an LMS platform. We are a
                productivity platform so you can think of us as like Notion,
                Obsidian, Craft...etc but specifically for students. The
                specificality of Noodle is that we are built for students and we
                are built to be a blend of everything you need to be productive
                as a student.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>When is it coming out</AccordionTrigger>
              <AccordionContent>
                We are working hard to get the first initial version of Noodle
                out as soon as possible, that might be hopefully during
                September time that aligns with the new school year.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Will I be given access</AccordionTrigger>
              <AccordionContent>
                Yes, we will onboard the people on our waitlist based on a first
                come first serve basis, with a 500 user limit for our initial
                version. We will also be giving out invites to people who are
                active in our discord server.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What will be the pricing</AccordionTrigger>
              <AccordionContent>
                We currently have no idea, we would like to have some sort of a
                survey with our initial version users to see what they think is
                a fair price for the platform. Noodle will also always be open
                source and self hostable for individuals who want to do that.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                What aspect of it is open source
              </AccordionTrigger>
              <AccordionContent>
                Noodle&apos;s DNA revolves around being open source, and with
                that we can confidentally say that we will keep it open source
                no matter what.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <div className="bg-primary-500 text-gray-12 mt-36 py-14 lg:mt-56">
        <div className="container mx-auto flex flex-col items-start gap-6">
          <h1 className="max-w-[20ch] text-5xl font-extrabold tracking-tighter md:text-6xl">
            <Balancer>How about we take a minute of your time?</Balancer>
          </h1>
          <p className="font-semibold tracking-tight lg:max-w-[80ch]">
            <Balancer>
              It would mean the world to us if you think Noodle will impact your
              productivity for the better and would sign up to our waiting list.
              We are working hard to deliver Noodle as soon as possible so that
              we can improve student productivity as soon as possible.
            </Balancer>
          </p>
          <Link
            href="/waitlist"
            className="bg-gray-1 text-primary-500 dark:bg-graydark-1 dark:hover:bg-graydark-2 hover:bg-gray-2 flex w-full items-center justify-center gap-4 rounded-md px-6 py-3 font-semibold transition-colors md:w-auto"
          >
            Join Waitlist <Icon name="arrow-right" size={20} />
          </Link>
        </div>
      </div>
      <h1 className="mt-36 text-center text-4xl font-extrabold tracking-tighter md:text-6xl">
        <Balancer>
          Thanks k byeee{' '}
          <span role="img" aria-label="face blowing a kiss">
            😘
          </span>
        </Balancer>
      </h1>
      <footer className="my-8">
        <p className="text-gray-11 dark:text-graydark-11 text-center">
          &copy; Copyright Ahmed Elsakaan 2023. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
};

Home.getLayout = (page) => (
  <>
    <Navbar />
    {page}
  </>
);

export default Home;
