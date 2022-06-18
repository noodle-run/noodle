import { render, screen } from '@testing-library/react';
import { Brand } from './Brand';

describe('Brand atom', () => {
  it('renders a brand icon', () => {
    render(<Brand />);

    expect(screen.getByTitle(/brand/i)).toBeInTheDocument();
  });

  it('renders with a size', () => {
    render(<Brand size="100" />);

    expect(screen.getByRole('presentation')).toHaveAttribute('width', '100');
    expect(screen.getByRole('presentation')).toHaveAttribute('height', '100');
  });
});
