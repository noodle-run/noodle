import { api } from '@/lib/trpc/server';
import type { RouterOutputs } from '@/lib/trpc/types';
import type { IconNames } from '@/primitives/icon';
import { Icon } from '@/primitives/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/primitives/tabs';
import { Textarea } from '@/primitives/textarea';
import {
  ClockIcon,
  DiamondIcon,
  PenLineIcon,
  RadicalIcon,
  WeightIcon,
} from 'lucide-react';
import { redirect } from 'next/navigation';
import { format } from 'timeago.js';

interface Props {
  params: {
    id: string;
  };
}

type UserModule = RouterOutputs['modules']['getById'];

export default async function ModulePage({ params }: Props) {
  let userModule: UserModule;

  try {
    userModule = await api.modules.getById({ id: params.id });
  } catch {
    redirect('/not-found');
  }

  return (
    <div className="flex flex-1 gap-6">
      <div className="flex-1">
        <div className="flex items-center gap-4">
          <Icon
            name={
              userModule.icon === 'default'
                ? 'Folder'
                : (userModule.icon as IconNames)
            }
            size={30}
            strokeWidth={1.5}
          />
          <h1 className="text-3xl font-medium">{userModule.name}</h1>
        </div>
        <Tabs defaultValue="notes" className="mt-4 w-full">
          <TabsList className="w-full">
            <TabsTrigger value="notes" className="flex items-center gap-2">
              <PenLineIcon size={15} />
              Notebooks
            </TabsTrigger>
            <TabsTrigger value="flashcards" className="flex items-center gap-2">
              <DiamondIcon size={15} />
              Flashcards
            </TabsTrigger>
          </TabsList>
          <TabsContent value="notes">
            <div>Notes</div>
          </TabsContent>
          <TabsContent value="flashcards">
            <div>Flashcards</div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="w-[330px] rounded-lg border p-6">
        <div className="flex flex-col gap-3">
          <h2 className="font-medium">Description</h2>
          <Textarea
            value={userModule.description ?? ''}
            readOnly
            className="resize-none"
          />
        </div>
        <div className="mt-4 flex flex-col gap-2 [&>p]:flex [&>p]:items-center [&>p]:gap-2 [&>p]:text-foreground-muted">
          <p>
            <RadicalIcon size={15} /> {userModule.code}
          </p>
          <p>
            <WeightIcon size={15} /> {userModule.credits} credits
          </p>
          <p>
            <ClockIcon size={15} /> {format(userModule.createdAt)}
          </p>
          <p>
            <PenLineIcon size={15} /> 0 Notebooks
          </p>
          <p>
            <DiamondIcon size={15} /> 0 Flashcards
          </p>
        </div>
      </div>
    </div>
  );
}
