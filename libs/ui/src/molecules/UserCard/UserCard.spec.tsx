import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as nextAuthReact from 'next-auth/react';
import { ComponentProps } from 'react';
import { UserCard } from './UserCard';

jest.mock('next-auth/react');

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const args: ComponentProps<typeof UserCard> = {
  name: 'Ahmed Elsakaan',
  avatar: 'https://avatars.githubusercontent.com/u/20271968?v=4',
};

describe('UserCard molecule', () => {
  it('should render name', () => {
    render(<UserCard {...args} />);

    expect(screen.getByText(args.name as string)).toBeInTheDocument();
  });

  it('should render avatar', () => {
    render(<UserCard {...args} />);

    expect(screen.getByRole('img')).toHaveAttribute('src', args.avatar);
  });

  it('should trigger the sign out on click', async () => {
    const mockedSignOut = jest.fn();

    (nextAuthReact.signOut as jest.Mock).mockImplementation(() =>
      Promise.resolve(mockedSignOut()),
    );

    render(<UserCard {...args} />);

    expect(mockedSignOut).not.toHaveBeenCalled();

    await act(async () => {
      await userEvent.click(screen.getByRole('button'));
    });

    await act(async () => {
      await userEvent.click(screen.getByText('Sign out'));
    });

    expect(mockedSignOut).toHaveBeenCalled();
  });

  it('should render the image placeholder if no avatar is found', () => {
    render(<UserCard {...args} avatar={undefined} />);

    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      '/user-placeholder.svg',
    );
  });
});
