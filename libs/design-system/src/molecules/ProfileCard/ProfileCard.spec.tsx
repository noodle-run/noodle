import { render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { ProfileCard } from './ProfileCard';

const args: ComponentProps<typeof ProfileCard> = {
  src: 'https://randomuser.me/api/portraits/men/52.jpg',
  name: 'John Doe',
  course: 'BSc Computer Science',
};

describe('ProfileCard Molecule', () => {
  it('renders the profile picture', () => {
    render(<ProfileCard {...args} />);

    expect(screen.getByRole('img').getAttribute('src')).toBe(args.src);
  });

  it('renders the profile name', () => {
    render(<ProfileCard {...args} />);

    expect(screen.getByText(args.name)).toBeInTheDocument();
  });

  it('renders the profile course', () => {
    render(<ProfileCard {...args} />);

    expect(screen.getByText(args.course)).toBeInTheDocument();
  });
});
