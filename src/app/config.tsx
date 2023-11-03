import { type AccordionItemProps } from "@nextui-org/accordion";
import {
  CalendarIcon,
  FilesIcon,
  HomeIcon,
  ListChecksIcon,
  ListTodoIcon,
  PuzzleIcon,
  WalletCardsIcon,
} from "lucide-react";
import { type FeatureCardProps } from "./(marketing)/_components/feature-card";

export const siteConfig = {
  name: "Noodle",
  tagline: "Rethinking Student Productivity",
  description:
    "Noodle is an open-source platform that combines various productivity tools into one, such as note taking and task management, providing insightful automations to enhance student productivity.",

  github: "https://github.com/noodle-run/noodle",
  twitter: "https://twitter.com/ixahmedxii",
  discord: "https://discord.gg/SERySfj8Eg",
  instagram: "https://instagram.com/noodle.run",

  url: "https://noodle.run",
};

export const dashboardLinks = [
  {
    href: "/app",
    label: "Home",
    icon: <HomeIcon size={18} />,
  },
  {
    href: "/app/modules",
    label: "Modules",
    icon: <PuzzleIcon size={18} />,
  },
  {
    href: "/app/notes",
    label: "Notebooks",
    icon: <FilesIcon size={18} />,
  },
  {
    href: "/app/flashcards",
    label: "Flashcards",
    icon: <WalletCardsIcon size={18} />,
  },
  {
    href: "/app/tasks",
    label: "Tasks",
    icon: <ListTodoIcon size={18} />,
  },
  {
    href: "/app/assignments",
    label: "Assignments",
    icon: <ListChecksIcon size={18} />,
  },
  {
    href: "/app/calendar",
    label: "Calendar",
    icon: <CalendarIcon size={18} />,
  },
];

export const features: FeatureCardProps[] = [
  {
    emoji: (
      <span role="img" aria-label="chart increasing">
        📈
      </span>
    ),
    className: "lg:grid-in-leftTop",
    title: "Insights & Analytics",
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
    title: "Powerful Note Taking",
    className: "lg:grid-in-centerTop",
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
    className: "lg:grid-in-right",
    title: "Flashcards",
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
    title: "AI this & Automations that",
    className: "lg:grid-in-leftBottom",
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
    title: "Open Source",
    className: "lg:grid-in-centerBottom",
    children: (
      <p>
        Apart from the glamour of being open source, Noodle&apos;s codebase is
        actually open for contributions I mean if you even dare!
      </p>
    ),
  },
];

export const faq: Pick<AccordionItemProps, "aria-label" | "children">[] = [
  {
    "aria-label": "Why is the name Noodle",
    children:
      "The name came up from our usage of the platform Moodle throughout our university years. We wanted to build something with our idea for this platform and the name Noodle came up as a joke. We liked it and it stuck.",
  },
  {
    "aria-label": "Is it an LMS platform",
    children:
      "The simple answer is no, we are not an LMS platform. We are a productivity platform so you can think of us as like Notion, Obsidian, Craft...etc but specifically for students. The specificality of Noodle is that we are built for students and we are built to be a blend of everything you need to be productive as a student.",
  },
  {
    "aria-label": "When is it coming out",
    children:
      "We are working hard to get the first initial version of Noodle out as soon as possible (beta), that would be closed and invite only for a number of people, from there on we will be launching and widening the userbase in phases.",
  },
  {
    "aria-label": "Will I be given access",
    children:
      "Yes, we will onboard the people on our waitlist based on a first come first serve basis, with a 500 user limit for our initial version. We will also be giving out invites to people who are active in our discord server.",
  },
  {
    "aria-label": "What will be the pricing",
    children:
      "We currently have no idea, we would like to have some sort of a survey with our initial version users to see what they think is a fair price for the platform. Noodle will also always be open source and self hostable for individuals who want to do that.",
  },
  {
    "aria-label": "What aspect of it is open source",
    children:
      "Noodle's DNA revolves around being open source, and with that we can confidentally say that we will keep it open source no matter what.",
  },
];
