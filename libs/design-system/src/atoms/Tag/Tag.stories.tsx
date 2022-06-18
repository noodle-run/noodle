import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Tag } from './Tag';

const args: ComponentProps<typeof Tag> = {
  color: '$red10',
};

const config: Meta<typeof args> = {
  title: 'Design System / Atoms / Tag',
  component: Tag,
  args,
};

export default config;

export const Normal: Story<typeof args> = (props) => <Tag {...props} />;
Normal.storyName = 'Tag';
