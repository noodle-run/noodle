import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import { Sidebar } from './Sidebar';

const args: ComponentProps<typeof Sidebar> = {
  user: {
    name: 'Ahmed Elsakaan',
    avatar: 'https://avatars.githubusercontent.com/u/20271968?v=4',
  },
  links: [
    {
      label: "Today's Activity",
      href: '/dashboard',
      icon: <p>activity icon</p>,
    },
  ],
};

describe('Sidebar organism', () => {
  it('opens and closes the menu on mobile', async () => {
    render(<Sidebar {...args}>Dashboard</Sidebar>);

    const button = screen.getByTestId('menu-button');

    expect(screen.getByTestId('menu-0')).toBeInTheDocument();
    expect(screen.getByTitle('Open menu')).toBeInTheDocument();
    expect(screen.queryByTitle('Close menu')).not.toBeInTheDocument();

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      await userEvent.click(button);
    });

    expect(screen.getByTestId('menu-auto')).toBeInTheDocument();
    expect(screen.queryByTitle('Open menu')).not.toBeInTheDocument();
    expect(screen.getByTitle('Close menu')).toBeInTheDocument();
  });

  it('renders the menu with auto height on desktop', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query: string) => ({
        matches: true,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    render(<Sidebar {...args}>Dashboard</Sidebar>);

    expect(screen.getByTestId('menu-auto')).toBeInTheDocument();
  });
});
