import { ComponentProps, FC } from 'react';
import { Greeting } from '../../molecules/Greeting';
import { ModuleCard } from '../../molecules/ModuleCard';
import { NotebookItem } from '../../molecules/NotebookItem';
import { Dashboard } from '../../templates/Dashboard';

type TodaysActivityProps = {
  userName: string;
  userCourse: string;
  userAvatar: string;
  quote: string;
  recentModules: ComponentProps<typeof ModuleCard>[];
  recentNotebooks: ComponentProps<typeof NotebookItem>[];
};

export const TodaysActivity: FC<TodaysActivityProps> = ({
  userName,
  userAvatar,
  userCourse,
  recentModules,
  recentNotebooks,
  quote,
}) => {
  return (
    <Dashboard
      userName={userName}
      userAvatar={userAvatar}
      userCourse={userCourse}
    >
      <Greeting name={userName.split(' ')[0]} quote={quote} />
      <div className="flex flex-col">
        <section className="order-2 pt-9 lg:order-1">
          <h3 className="pb-3 text-xs lg:text-base dark:text-zinc-400 text-zinc-600">
            Recent modules
          </h3>
          <div className="grid gap-6 grid-cols-[repeat(auto-fill,_minmax(288px,_1fr))]">
            {recentModules.map((module) => (
              <div key={module.name}>
                <ModuleCard {...module} />
              </div>
            ))}
          </div>
        </section>
        <section className="order-1 pt-9">
          <h3 className="pb-3 text-xs lg:text-base dark:text-zinc-400 text-zinc-600">
            Recently edited notebooks
          </h3>
          <div className="flex flex-col gap-3">
            {recentNotebooks.map((notebook) => (
              <NotebookItem key={notebook.href} {...notebook} />
            ))}
          </div>
        </section>
      </div>
    </Dashboard>
  );
};
