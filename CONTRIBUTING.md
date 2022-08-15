# Contributing

Thanks for your interest in contributing to the development of Noodle. Any contribution is highly appreciated and will be reflected on the Github repo.

First things first, make sure you read our [Code of Conduct](https://github.com/ixahmedxi/noodle/blob/main/CODE-OF-CONDUCT.md) to keep our community friendly and respectful.

In this guide you will get an overview of the expected contribution workflow from opening an issue, creating a PR, the PR review process and merging your PR.

## Table of contents

<!-- toc -->

- [Contributing](#contributing)
  - [Table of contents](#table-of-contents)
  - [New contributor guide](#new-contributor-guide)
  - [Getting started](#getting-started)
    - [Issues](#issues)
      - [Creating new issues](#creating-new-issues)
      - [Solving an issue](#solving-an-issue)
    - [Making Changes](#making-changes)
      - [Fork the repository](#fork-the-repository)
      - [Commit your change](#commit-your-change)
      - [Pull request](#pull-request)
      - [Your PR is merged](#your-pr-is-merged)
  - [Setup](#setup)
    - [Node](#node)
      - [Direct installation](#direct-installation)
      - [Through your package manager](#through-your-package-manager)
      - [NVM](#nvm)
      - [Make sure Nodejs is installed](#make-sure-nodejs-is-installed)
    - [Pnpm](#pnpm)
    - [Dependencies](#dependencies)

<!-- tocstop -->

## New contributor guide

To get a brief overview of the project, read the [Readme.md](https://github.com/ixahmedxi/noodle/blob/main/README.md) file and checkout the [Website](https://noodle.run).

If this is your first time contributing to open source, here are some helpful resources to get you started:

- [Finding ways to contribute to open source on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)
- [Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
- [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)
- [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)

## Getting started

### Issues

#### Creating new issues

If you spot any problems with the codebase, [search if an issue already exists](https://docs.github.com/en/github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests#search-by-the-title-body-or-comments). If a related issue doesn't exist, you can open a new issue.

#### Solving an issue

Scan through our [existing issues](https://github.com/ixahmedxi/noodle/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc) to find one that interests you. You can narrow down the search using labels as filters. See Labels for more information. As a general rule, we don’t assign issues to anyone. If you find an issue to work on, you are welcome to open a PR with a fix.

### Making Changes

#### Fork the repository

1. Fork the repository
   - Using GitHub Desktop:
     - [Getting started with GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop) will guide you through setting up Desktop.
     - Once Desktop is set up, you can use it to [fork the repo](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)!
   - Using the command line:
     - [Fork the repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository) so that you can make your changes without affecting the original project until you're ready to merge them.
2. Install or update to Node.js v16 and make sure you follow the [setup steps](#setup) to get yourself up and running.
3. Create a working branch and start with your changes!

#### Commit your change

Commit the changes once you are happy with them. We have husky set up on the codebase and it will run some checks when you try to commit, if any of the checks fail, try to fix them and then re-attempt to commit.

#### Pull request

When you're finished with the changes, create a pull request, also known as a PR.

- In your pull request description, outline the main changes that you have done.
- Don't forget to [link PR to issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) if you are solving one.
- We may ask for changes to be made before a PR can be merged, either using [suggested changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.
- As you update your PR and apply changes, mark each conversation as [resolved](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).
- If you run into any merge issues, checkout this [git tutorial](https://github.com/skills/resolve-merge-conflicts) to help you resolve merge conflicts and other issues.

#### Your PR is merged

Congratulations, we really appreciate what you contribute. Once your pull request has been merged, your contribution will be publicly visible on the repo.

## Setup

In this guide, we will walk you through setting up and running the project locally on your machine.

### Node

The project needs [Nodejs](https://nodejs.org) v16 installed on your system, you can install Nodejs in multiple ways.

#### Direct installation

You can directly install the Nodejs pre-built installer [here](https://nodejs.org/en/download/).

#### Through your package manager

A lot of operating systems like Ubuntu, Fedora and Arch linux come with a built in package manager that you can use to install Nodejs with one command from your terminal. You can refer to [this document](https://nodejs.org/en/download/package-manager/) for the commands that you might need.

#### NVM

Noodle is also `nvm` compatible, nvm is a node version manager that let's you install multiple versions of nodejs on your system at the same time so that you use the correct version of nodejs per project bases. You can read more about nvm and install it from [here](https://github.com/nvm-sh/nvm).

You can also pair nvm with this script that you can put at the end of your `~/.zshrc` or `~/.bashrc` file to automatically read the required version of nodejs the project needs from the `.nvmrc` file and automatically switch to it when you `cd` into the project.

```bash
# place this after nvm initialization!
autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$node_version" ]; then
      nvm use
    fi
  elif [ "$node_version" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc
```

#### Make sure Nodejs is installed

To make sure nodejs is installed on your system, you can run the following commands and if they output any version number, then you are good to go.

```bash
# Check node version installed
node --version

# Check npm version installed
npm --version
```

### Pnpm

NPM is the Nodejs package manager that you use to install third party packages like `React` so that you can use them in your project. Noodle however uses `pnpm` which is a faster package manager for nodejs.

You can [install pnpm](https://pnpm.io/installation) using many ways, checkout their installation guide to install pnpm on your system.

After installation, you can verify that it has been installed using `pnpm --version` and see if it outputs any version number.

### Dependencies

Noodle depends on a lot of third party packages and those are needed to be able to run the project locally. To install the dependencies you should do:

```bash
# Change terminal directory to noodle's directory
cd noodle

# Install dependencies
pnpm install
```
