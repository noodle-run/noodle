# Welcome to Noodle docs contributing guide

Thank you for your interest in contributing to our project! Any contribution is highly appreciated and will be reflected on our project ✨

First things first, make sure you read our [Code of Conduct](./CODE_OF_CONDUCT.md) to keep our community approachable and respectable.

In this guide, you will get an overview of the project structure and setup, as well as the workflow from opening an issue, creating a PR, reviewing, and merging the PR.

## Table of contents

- [Welcome to Noodle docs contributing guide](#welcome-to-noodle-docs-contributing-guide)
  - [Table of contents](#table-of-contents)
  - [New contributor guide](#new-contributor-guide)
  - [Getting your foot in](#getting-your-foot-in)
    - [Some simple rules](#some-simple-rules)
  - [The tech stack](#the-tech-stack)
  - [Getting stuff running](#getting-stuff-running)
    - [Cloning the repo](#cloning-the-repo)
    - [Volta](#volta)
    - [Environment Variables](#environment-variables)
    - [Installing dependencies](#installing-dependencies)
    - [Running stuff](#running-stuff)
  - [Closing notes](#closing-notes)

## New contributor guide

Here are some resources to help you get started with open source contributions:

- [Finding ways to contribute to open source on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)
- [Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
- [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)
- [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)

## Getting your foot in

Our preferred way of providing the opportunity for people to contribute to Noodle is through a process that starts with creating a new issue, the summary of the workflow that you can expect and should adhere to is the following:

- You see an area of improvement in the code base, this could be a fix, feature, refactoring...etc
- Create an [issue](https://github.com/ixahmedxi/noodle/issues) on our Github repository.
- Wait until a team member discusses the issue with you, and if both parties are in agreement, you can assign yourself to the issue.
- Start working on the issue, creating a draft pull request and remembering to link your pull request with the issue.
- Once the work is complete, change the status of the pull request to ready for review.
- We will review the pull request and if all is good, congratulations! 🥳 you are now a Noodle contributor!
- If not, we will explain the changes that need to be made for the pull request to be merged.

### Some simple rules

- Don't work on an issue that has already been assigned to someone.
- Don't work on something without getting a team member's approval, this is to not waste your time by making you work on something that won't be merged.
- Don't demand for your pull request to be approved and merged.
- Be nice to everyone involved, we are aiming to create a positive community around collaborating and contributing towards Noodle's development.

## The tech stack

The Building blocks:

- [NodeJS](https://nodejs.org/en)
- [Pnpm](https://pnpm.io/)
- [NX](https://nx.dev)

The actual stack:

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [tRPC](https://trpc.io)
- [Prisma](https://www.prisma.io/)
- [Next-auth](https://next-auth.js.org/)

Development stuff:

- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev/)
- [Playwright](https://playwright.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io)

There are a lot of other technologies being used in this project, however these are the most important and influential bits of it.

## Getting stuff running

### Cloning the repo

To clone the repo, you firstly need to [fork](https://github.com/ixahmedxi/noodle/fork) it, and then clone your copy of noodle locally.

```bash
git clone https://github.com/<your-gh-username>/noodle.git
```

### Volta

To get the project running locally, it is advised that you have [Volta](https://volta.sh/) installed on your system. This allows you to have the exact same versions of [NodeJS](https://nodejs.org/en) and [Pnpm](https://pnpm.io/) as we do, further lowering the chances of you getting errors that we don't get.

There are ways to do this using other tools such as NVM, but we take Noodle as an initiative to move people to arguably better tools such as Volta.

Volta's pnpm support is currently experimental, and so you need to do the following to let it manage your Pnpm version:

In your `.bashrc` or `.zshrc` file, add the following line:

```bash
export VOLTA_FEATURE_PNPM=1
```

With this out of the way, you should have the correct version of Nodejs and Pnpm once you change directory into Noodle's project folder. You can test this out as such:

```bash
# cd into noodle
cd /path/to/noodle

# output node and pnpm versions
node --version
pnpm --version
```

And make sure that the version is the same as the one defined in the root `package.json` file in the `volta` section.

### Environment Variables

Now that Volta has been installed locally on your system, it's time to configure your environment variables so that the project works as expected:

1. Duplicate the `.env.example` file as just `.env`
2. Populate the values with your own

You will need to create a postgres database and get the URL of it to use as the database for your local instance, we personally use [Neon](https://neon.tech/) as our database provider and hence we just create a development branch that we use instead of creating a local postgres instance.

We also use [Upstash](https://upstash.com/) for rate limiting and a redis instance.

You will also need to configure oauth github tokens to be able to use the authentication functionality of Noodle.

Also, if you want your own personal nx cloud instance, you will need to create a project on nx cloud and replace the default read only token provided.

### Installing dependencies

To install the dependencies needed to run Noodle, you need to run `pnpm install`, this will install all of the packages that we use.

### Running stuff

```bash
# Run the project's dev server
pnpm dev

# Build the project
pnpm build

# Run the built project in production mode
pnpm start

# Run the tests
pnpm test

# Run E2E tests
pnpm test:e2e

# Run the tests with coverage reporting
pnpm test:coverage

# Tests in watch mode
pnpm test:watch

# Lint
pnpm lint

# Format
pnpm format:write

# Storybook
pnpm storybook
```

Also, if in doubt and something is going wrong, `pnpm clean`.

This is only a subset of the important commands that you will be using throughout your usage of Noodle's codebase. Be sure to check out [the package.json file](./package.json) for the full list and get familiar with [Nx's commands](https://nx.dev/reference/commands) for more complex use cases.

## Closing notes

Again, thank you so much for your interest in contributing to Noodle, we really appreciate it, and if there is anything we can do to help your journey, make sure to join our [Discord Server](https://discord.gg/SERySfj8Eg).
