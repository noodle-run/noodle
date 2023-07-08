import { Balancer } from 'react-wrap-balancer';
import { ArrowDown, ArrowRight, Star } from 'lucide-react';
import { type NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Navbar } from '@/components/Navbar';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { constants } from '@/utils/constants';

const Home: NextPage = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <main>
      <Navbar />
      <header className="container mx-auto flex flex-col items-center justify-center gap-6 pt-36 text-center lg:pt-48">
        <a
          href={constants.github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-4 dark:bg-graydark-4 border-gray-8 dark:border-graydark-8 hover:bg-gray-5 dark:hover:bg-graydark-5 flex items-center gap-4 rounded-full border px-3 py-2 text-sm transition-colors"
        >
          Star us on Github{' '}
          <Star size={13} className="fill-primary-500 stroke-primary-500" />
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
            href="#features"
            className="bg-gray-4 dark:bg-graydark-4 border-gray-6 dark:border-graydark-6 hover:bg-gray-5 dark:hover:bg-graydark-5 flex w-full items-center justify-center gap-4 rounded-md border px-6 py-3 font-semibold transition-colors lg:w-auto"
          >
            Features <ArrowDown size={20} />
          </Link>
          <Link
            href="/waitlist"
            className="bg-primary-500 hover:bg-primary-700 text-gray-12 flex w-full items-center justify-center gap-4 rounded-md px-6 py-3 font-semibold transition-colors lg:w-auto"
          >
            Join Waitlist <ArrowRight size={20} />
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
        className="container mx-auto mt-56 flex flex-col gap-6"
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
      </section>
    </main>
  );
};

export default Home;
