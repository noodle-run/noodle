import { colorGroups } from '@noodle/stitches';
import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { EditedNoteCard } from './NotebookLink';

const args: ComponentProps<typeof EditedNoteCard> = {
  href: '/',
  title: '✨ History of Artificial Intelligence',
  lastEdited: new Date(),
  label: 'Artificial Intelligence',
  labelColor: 'red',
  isStarred: false,
};
const config: Meta<typeof args> = {
  title: 'Design System / Molecules / Notebook Link',
  component: EditedNoteCard,
  args,
  argTypes: {
    isStarred: {
      control: {
        type: 'boolean',
      },
    },
    labelColor: {
      control: {
        type: 'select',
        options: colorGroups,
      },
    },
    lastEdited: { control: 'date' },
  },
};

export default config;

export const Normal: Story<typeof args> = (props) => (
  <EditedNoteCard {...props} />
);
Normal.storyName = 'Notebook Link';
