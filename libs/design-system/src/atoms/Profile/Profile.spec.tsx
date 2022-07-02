import { render, screen } from '@testing-library/react';
import { Profile } from './Profile';

jest.mock('next/image', () => ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} />
));

describe('Profile atom', () => {
  it('renders the profile image', () => {
    const src = 'https://randomuser.me/api/portraits/';
    render(<Profile src={src} />);

    expect(screen.getByRole('img').getAttribute('src')).toBe(src);
  });

  it('renders the image with alt', () => {
    const src = 'https://randomuser.me/api/portraits/';
    render(<Profile src={src} />);

    expect(screen.getByAltText('Profile')).toBeInTheDocument();
  });
});
