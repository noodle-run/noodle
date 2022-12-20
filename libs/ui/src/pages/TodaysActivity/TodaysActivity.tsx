import { ComponentProps, FC } from 'react';
import { Greeting } from '../../molecules/Greeting';
import { ModuleCard } from '../../molecules/ModuleCard';
import { NotebookItem } from '../../molecules/NotebookItem';
import { Dashboard } from '../../templates/Dashboard';

type TodaysActivityProps = Omit<
  ComponentProps<typeof Dashboard>,
  'children'
> & {
  greetingProps: ComponentProps<typeof Greeting>;
  recentModules: {
    data?: ComponentProps<typeof ModuleCard>[];
    isLoading: boolean;
    isError: boolean;
  };
  recentNotebooks: {
    data?: ComponentProps<typeof NotebookItem>[];
    isLoading: boolean;
    isError: boolean;
  };
};

export const TodaysActivity: FC<TodaysActivityProps> = ({
  userName,
  userAvatar,
  greetingProps,
  recentModules,
  recentNotebooks,
}) => {
  return (
    <Dashboard userName={userName} userAvatar={userAvatar}>
      <Greeting {...greetingProps} />
      <div className="flex flex-col">
        <section className="order-2 pt-9 lg:order-1">
          <h3 className="pb-3 text-xs lg:text-base dark:text-zinc-400 text-zinc-600">
            Recent modules
          </h3>
          <div className="grid gap-6 grid-cols-[repeat(auto-fill,_minmax(288px,_1fr))]">
            {recentModules.isError && <div>Error loading modules :(</div>}
            {recentModules.isLoading && (
              <>
                <ModuleCard variant="loading" />
                <ModuleCard variant="loading" />
                <ModuleCard variant="loading" />
                <ModuleCard variant="loading" />
                <ModuleCard variant="loading" />
              </>
            )}
            {!recentModules.isLoading &&
              !recentModules.isError &&
              recentModules.data &&
              recentModules.data.map((module) => (
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
            {recentNotebooks.isError && <div>Error loading notebooks :(</div>}
            {recentNotebooks.isLoading && (
              <>
                <NotebookItem variant="loading" />
                <NotebookItem variant="loading" />
                <NotebookItem variant="loading" />
                <NotebookItem variant="loading" />
                <NotebookItem variant="loading" />
              </>
            )}
            {!recentNotebooks.isLoading &&
              !recentNotebooks.isError &&
              recentNotebooks.data &&
              recentNotebooks.data.map((notebook) => (
                <NotebookItem key={notebook.href} {...notebook} />
              ))}
          </div>
        </section>
      </div>
    </Dashboard>
  );
};
