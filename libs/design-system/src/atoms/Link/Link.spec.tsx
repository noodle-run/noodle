import { render, screen } from '@testing-library/react';
import { Link } from './Link';

describe('Link atom', () => {
  it('should render without icon', () => {
    render(<Link href="/" text="Link To Page" />);
    expect(screen.getByText('Link To Page')).toBeInTheDocument();
  });

  it('should render a link with the correct href', () => {
    render(<Link href="/test" text="Test" />);
    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('href', '/test');
  });

  it('should render the icon if provided', () => {
    render(<Link href="/test" text="Test" icon={<p>test icon</p>} />);

    const icon = screen.getByText(/test icon/i);

    expect(icon).toBeInTheDocument();
  });

  it('should render with the default variant if not provided', () => {
    render(<Link href="/test" text="Test" />);

    const variant = screen.getByTestId(/default/i);

    expect(variant).toBeInTheDocument();
  });
});
