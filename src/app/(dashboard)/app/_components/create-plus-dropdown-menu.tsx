import { Button } from '@/primitives/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/primitives/dropdown-menu';
import {
  PlusIcon,
  ChevronDownIcon,
  PuzzleIcon,
  PenLineIcon,
  ListChecksIcon,
  DiamondIcon,
} from 'lucide-react';

export function CreatePlusDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 p-2">
          <PlusIcon size={15} />
          <ChevronDownIcon size={13} strokeWidth={1.5} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-48">
        <DropdownMenuItem>
          <PuzzleIcon size={15} className="mr-2" />
          <span>New Module</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PenLineIcon size={15} className="mr-2" />
          <span>New Notebook</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <ListChecksIcon size={15} className="mr-2" />
          <span>New Task</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <DiamondIcon size={15} className="mr-2" />
          <span>New Flashcard</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
