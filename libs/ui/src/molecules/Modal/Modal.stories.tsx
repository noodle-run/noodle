import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Modal } from './Modal';

const args: ComponentProps<typeof Modal> = {
  open: true,
  onClose: () => {},
  title: 'Modal title',
  description: 'Modal description',
  image: '/waitlist-illustration.svg',
  alt: 'illustration',
};

const config: Meta<typeof args> = {
  title: 'Molecules / Modal',
  component: Modal,
  args,
};

export default config;

const Template: Story<typeof args> = (props) => <Modal {...props} />;

export const Default = Template.bind({});

export const NoImage = Template.bind({});
NoImage.args = {
  image: undefined,
  alt: undefined,
};
