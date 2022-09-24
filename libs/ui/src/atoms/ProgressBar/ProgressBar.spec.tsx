import { render, screen } from '@testing-library/react';
import { ProgressBar } from './ProgressBar';

describe('Progress bar atom', () => {
  it('should render with background color', () => {
    render(<ProgressBar value={50} color="red" />);

    expect(screen.getByRole('presentation')).toHaveClass('bg-red-400');
  });

  it('should render with width', () => {
    render(<ProgressBar value={50} color="red" />);

    expect(screen.getByRole('presentation')).toHaveStyle('width: 50%');
  });
});
