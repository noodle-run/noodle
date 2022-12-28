import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  const email = 'johndoe123@gmail.com';

  const user = await prisma.user.upsert({
    where: { email: 'johndoe123@gmail.com' },
    update: {},
    create: {
      name: 'John Doe',
      email,
      emailVerified: new Date(),
      image: 'https://i.pravatar.cc/150?img=50',
    },
  });

  const userModule = await prisma.module.upsert({
    where: { name: 'Module 1' },
    update: {},
    create: {
      name: 'Module 1',
      code: 'M001',
      icon: '👋',
      color: 'amber',
      User: {
        connect: {
          id: user.id,
        },
      },
    },
  });

  const notebook = await prisma.notebook.upsert({
    where: { id: 'notebook-1' },
    update: {},
    create: {
      id: 'notebook-1',
      title: 'Notebook 1',
      icon: '📓',
      content:
        '[{"type":"h1","children":[{"text":"Getting started with Noodle!"}]},{"type":"p","children":[{"text":"Welcome to Noodle, we are glad to have you here!"}]}]',
      User: {
        connect: {
          id: user.id,
        },
      },
      Module: {
        connect: {
          id: userModule.id,
        },
      },
    },
  });

  const task = await prisma.task.upsert({
    where: { id: 'task-1' },
    update: {},
    create: {
      id: 'task-1',
      todo: 'Take Noodle to the moon 🚀',
      dueDate: new Date(),
      Module: {
        connect: {
          id: userModule.id,
        },
      },
      User: {
        connect: {
          id: user.id,
        },
      },
    },
  });

  // eslint-disable-next-line no-console
  console.log({ user, module: userModule, notebook, task });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    // eslint-disable-next-line no-console
    console.error(err);
    await prisma.$disconnect();
  });
