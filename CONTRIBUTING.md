# Noodle's contributing guidelines

Thank you for your interest in contributing to our project! Any contribution is highly appreciated and will be reflected on our project ✨

First things first, make sure you read our [Code of Conduct](./CODE_OF_CONDUCT.md) to keep our community approachable and respectable.

In this guide, you will get an overview of the project structure and setup, as well as the workflow from opening an issue, creating a PR, reviewing, and merging the PR.

## Table of contents

- [Noodle's contributing guidelines](#noodles-contributing-guidelines)
  - [Table of contents](#table-of-contents)
  - [New contributor guide](#new-contributor-guide)
  - [Getting your foot in](#getting-your-foot-in)
    - [Some simple rules](#some-simple-rules)
  - [The tech stack](#the-tech-stack)
  - [Getting stuff running](#getting-stuff-running)
    - [Cloning the repo](#cloning-the-repo)
    - [Bun](#bun)
    - [Installing dependencies](#installing-dependencies)
    - [Environment Variables](#environment-variables)
      - [Configuring your Database](#configuring-your-database)
      - [Configuring Clerk](#configuring-clerk)
      - [Configuring Upstash](#configuring-upstash)
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

- Create an [issue](https://github.com/noodle-run/noodle/issues) on our Github repository.

- Wait until a team member discusses the issue with you, and if both parties are in agreement, you can assign yourself to the issue.

- Start working on the issue, creating a draft pull request and remembering to link your pull request with the issue.

- Once the work is complete, change the status of the pull request to ready for review.

- We will review the pull request and if all is good, congratulations! 🥳 you are now a Noodle contributor!

- If not, we will explain the changes that need to be made for the pull request to be merged.

If you would like to be more involved in the development of Noodle, we would like to invite you to our [Discord Server](https://discord.gg/SERySfj8Eg) where we can have a chat together and get you involved in the project!

### Some simple rules

- Don't work on an issue that has already been assigned to someone else.

- Don't work on something without getting a team member's approval, this is to not waste your time by making you work on something that won't be merged.

- Don't demand for your pull request to be approved and merged.

- Be nice to everyone involved, we are aiming to create a positive community around collaborating and contributing towards Noodle's development.

## The tech stack

The Runtime:

- [Bun](https://bun.sh/)

The Tech Stack:

- [Next.js App Router](https://nextjs.org/)

- [TailwindCSS](https://tailwindcss.com/)

- [tRPC](https://trpc.io)

- [Drizzle ORM](https://orm.drizzle.team/)

- [NextUI](https://nextui.org/)

- [Sqlite](https://www.sqlite.org/index.html)

- [SlateJS](https://docs.slatejs.org/)

- [Plate](https://platejs.org/)

- [Clerk Auth](https://clerk.dev/)

Development stuff:

- [ESLint](https://eslint.org/)

- [Prettier](https://prettier.io)

There are a lot of other technologies being used in this project, however these are the most important and influential bits of it.

## Getting stuff running

### Cloning the repo

To clone the repo, you firstly need to [fork](https://github.com/noodle-run/noodle/fork) it, and then clone your copy of noodle locally.

```bash
git clone https://github.com/<your-gh-username>/noodle.git
```

### Bun

Bun is used as the package manager of Noodle, with Bun, you actually don't need to have NodeJS installed at all on your system to be able to run Noodle. The only tool you need to install dependencies & run Noodle is Bun!

To install bun, head over to [their website](https://bun.sh/) which will tell you how to get it installed on your system.

To check that you have Bun installed, simply run the following command:

```bash
bun --version
```

If this commands outputs a version number, you're all good to go.

### Installing dependencies

With bun installed on your machine, the next step would be to install the dependencies that Noodle relies upon to work, to do this, run the following command:

```bash
bun install
```

### Environment Variables

Now that Bun & dependencies has been installed, it's time to configure your environment variables so that the project works as expected:

1.  Duplicate the `.env.example` file as just `.env`

2.  Populate the values with your own

#### Configuring your Database

At Noodle, we are using Turso as our production database, but since this is based on Sqlite, it makes it very easy to run things locally, all you need to have a local DB working is the following in the `.env` file:

```bash
DATABASE_URL="file:./dev.db"
```

This will create a local file in the root of the repository called `dev.db` and things will be stored there, no need to install any technologies to get a database up and running!

#### Configuring Clerk

Clerk is our choice of authentication service for Noodle, it's true that it is a paid service but arguably for running a self hosted version of Noodle it is even easier then setting things up yourself especially with OAuth. To configure clerk you need to do the following:

1.  Create your account through [Clerk's dashboard](https://dashboard.clerk.com/)

2.  Add a new application

3.  Set up it's name and how you wish to sign in

4.  In the sidebar, go to "API Keys"

5.  Copy the publishable key into `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` in your .env file

6.  Copy the secret key into `CLERK_SECRET_KEY` in your .env file

And now you got Auth!

#### Configuring Upstash (optional)

1. Create your account through [Upstash's dashboard](https://console.upstash.com)
2. Click on "Create database"
3. Give it a name and a region
4. Enable TLS (SSL) encryption
5. Press create
6. In the "Connect to your database" section, select "@upstash/redis"
7. Copy the url into your `.env` file as `REDIS_URL` key
8. Copy the token into your `.env` file as `REDIS_TOKEN` key
9. Upstash is only used for ratelimiting, if left empty then ratelimiting will be disabled

And that's all for the redis part!

### Running stuff

```bash
# Run the project's dev server
bun dev

# Build the project
bun run build

# Run the built project in production mode
bun start

# Run the typecheck script
bun typecheck

# Lint using ESLint
bun lint

# Format using Prettier
bun format
```

## Closing notes

Again, thank you so much for your interest in contributing to Noodle, we really appreciate it, and if there is anything we can do to help your journey, make sure to join our [Discord Server](https://discord.gg/SERySfj8Eg).
