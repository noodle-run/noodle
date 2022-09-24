import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { ModuleTag } from './ModuleTag';

const args: ComponentProps<typeof ModuleTag> = {
  name: 'Artificial Intelligence',
  color: 'blue',
};

const config: Meta<typeof args> = {
  title: 'Atoms / Module Tag',
  component: ModuleTag,
  args,
};

export default config;

const Template: Story<typeof args> = (props) => <ModuleTag {...props} />;

export const Normal = Template.bind({});
Normal.storyName = 'Module Tag';
