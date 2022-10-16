import { render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { UserCard } from './UserCard';

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
});
