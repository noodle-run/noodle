import { colorGroups } from '@noodle/stitches';
import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { EditedNoteCard } from './EditedNoteCard';

const args: ComponentProps<typeof EditedNoteCard> = {
  noteTitle: '✨ History of Artificial Intelligence',
  lastEdited: new Date(),
  labelName: 'Artificia Intelligence',
  labelColor: 'mint',
  isStarred: false,
};
const config: Meta<typeof args> = {
  title: 'Design System / Molecules / EditedNoteCard',
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
Normal.storyName = 'Edited Note Card';
