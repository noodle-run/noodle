import { render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { TodaysActivity } from './TodaysActivity';

const args: ComponentProps<typeof TodaysActivity> = {
  userName: 'Ahmed Elsakaan',
  userAvatar: 'https://avatars.githubusercontent.com/u/20271968?v=4',
  greetingProps: {
    isLoading: false,
    greeting: 'Good morning',
    quote: 'The best way to predict the future is to invent it.',
  },
  recentModules: {
    data: [
      {
        href: '/modules/1',
        icon: '🧠',
        name: 'Algorithms and Complexity',
        code: 'CS2860',
        tasks: 3,
        color: 'red',
        progress: 45,
      },
    ],
    isLoading: false,
  },
  recentNotebooks: {
    data: [
      {
        href: '/notebooks/1',
        icon: '✨',
        title: 'Week 1 - Introduction to IT Project Management',
        lastEdited: '6 hours ago',
        label: {
          name: 'IT Project Management',
          color: 'green',
        },
      },
    ],
    isLoading: false,
  },
};

describe("Today's Activity page", () => {
  it('renders the user name', () => {
    render(<TodaysActivity {...args} />);
    expect(screen.getByText(args.userName as string)).toBeInTheDocument();
  });

  it('renders the user avatar', () => {
    render(<TodaysActivity {...args} />);
    expect(screen.getByAltText(args.userName as string)).toBeInTheDocument();
  });

  it('renders the greeting', () => {
    render(<TodaysActivity {...args} />);
    expect(
      screen.getByText(args.greetingProps.greeting as string),
    ).toBeInTheDocument();
  });

  it('renders the quote', () => {
    render(<TodaysActivity {...args} />);
    expect(
      screen.getByText(args.greetingProps.quote as string),
    ).toBeInTheDocument();
  });

  it('renders the recent modules', () => {
    render(<TodaysActivity {...args} />);
    const module = args.recentModules.data?.[0];
    expect(screen.getByText(module?.name || '')).toBeInTheDocument();
  });

  it('renders the recent notebooks', () => {
    render(<TodaysActivity {...args} />);
    const notebook = args.recentNotebooks.data?.[0];
    expect(screen.getByText(notebook?.title || '')).toBeInTheDocument();
  });

  it('renders the modules loading animation', () => {
    render(
      <TodaysActivity
        {...args}
        recentModules={{
          ...args.recentModules,
          isLoading: true,
        }}
      />,
    );
    expect(screen.getAllByRole('status')).toHaveLength(5);
  });

  it('renders the notebooks loading animation', () => {
    render(
      <TodaysActivity
        {...args}
        recentNotebooks={{
          ...args.recentNotebooks,
          isLoading: true,
        }}
      />,
    );
    expect(screen.getAllByRole('status')).toHaveLength(5);
  });
});
