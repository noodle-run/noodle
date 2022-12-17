import { TRPCError } from '@trpc/server';
import { authProcedure } from '../middlewares';
import { t } from '../utils/trpc';

const intervals = [
  { label: 'year', seconds: 31536000 },
  { label: 'month', seconds: 2592000 },
  { label: 'day', seconds: 86400 },
  { label: 'hour', seconds: 3600 },
  { label: 'minute', seconds: 60 },
  { label: 'second', seconds: 1 },
];

function timeSince(date: Date) {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  const interval = intervals.find((i) => i.seconds < seconds);
  if (interval) {
    const count = Math.floor(seconds / interval.seconds);
    return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
  }
  return 'just now';
}

export const notebookRouter = t.router({
  getAllNotebooks: authProcedure.query(async ({ ctx }) => {
    const data = await ctx.prisma.notebook
      .findMany({
        where: { userId: ctx.session?.user?.id },
        include: {
          Module: {
            select: {
              name: true,
              color: true,
            },
          },
        },
      })
      .catch((err: Error) => {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: err.message,
        });
      });

    const notebooks = data.map((notebook) => ({
      ...notebook,
      href: `/notebook/${notebook.id}`,
      lastEdited: timeSince(notebook.updatedAt),
      label: {
        name: notebook.Module.name,
        color: notebook.Module.color,
      },
      icon: notebook.icon,
    }));

    return notebooks;
  }),
});
