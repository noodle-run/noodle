import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Blockquote } from './Blockquote';

const args: ComponentProps<typeof Blockquote> = {
  children:
    'Curabitur sit amet leo leo. Sed dictum sollicitudin ipsum sit amet volutpat. Suspendisse faucibus magna nunc, vel sodales ante facilisis ullamcorper. Curabitur cursus porta enim ut ultrices. Suspendisse vitae elementum turpis. Aenean at tortor gravida, luctus lacus at, iaculis leo. Cras sed tellus quis nulla finibus laoreet. Aenean viverra facilisis tortor ut eleifend. Duis luctus fermentum ligula, nec vestibulum nulla maximus et. Nunc quis metus dui. Cras maximus magna tellus, eget tristique turpis rhoncus efficitur. Vivamus pulvinar lorem neque, non interdum diam gravida non. Etiam nisl erat, ullamcorper at est et, tempor tincidunt ante. Praesent at egestas mi, in dignissim enim. Sed tempor gravida velit, a porta nibh bibendum sit amet. Nulla sodales pulvinar egestas.',
};

const config: Meta<typeof args> = {
  title: 'Editor / Blockquote',
  component: Blockquote,
  args,
  argTypes: {
    element: {
      table: {
        disable: true,
      },
    },
  },
};

export default config;

const Template: Story<typeof args> = (props) => <Blockquote {...props} />;

export const Normal = Template.bind({});
Normal.storyName = 'Blockquote';
