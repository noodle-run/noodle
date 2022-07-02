import { render, screen } from '@testing-library/react';
import { Profile } from './Profile';

describe('Profile atom', () => {
  it('renders the profile image', () => {
    const src = 'https://randomuser.me/api/portraits/men/52.jpg';
    render(<Profile src={src} />);

    expect(screen.getByRole('img').getAttribute('src')).toBe(src);
  });

  it('renders the image with alt', () => {
    const src = 'https://randomuser.me/api/portraits/men/52.jpg';
    render(<Profile src={src} />);

    expect(screen.getByAltText('Profile')).toBeInTheDocument();
  });
});
