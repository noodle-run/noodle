import { render, screen } from '@testing-library/react';
import { Star } from './Star';

describe('Star atom', () => {
  it('renders the star icon', () => {
    render(<Star />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders the star icon with the correct size', () => {
    render(<Star size={64} />);

    expect(screen.getByTestId('64-default')).toBeInTheDocument();
  });

  it('renders the star with default size of 24px', () => {
    render(<Star />);

    expect(screen.getByTestId('24-default')).toBeInTheDocument();
  });

  it('renders the star filled', () => {
    render(<Star filled />);

    expect(screen.getByTestId('24-filled')).toBeInTheDocument();
  });
});
