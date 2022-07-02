import { render, screen } from '@testing-library/react';
import { ProgressBar } from './ProgressBar';

describe('ProgressBar atom', () => {
  it('renders with the correct progress', () => {
    render(<ProgressBar progress={50} color="red" />);

    expect(screen.getByTestId('50%')).toBeInTheDocument();
  });

  it('renders with the correct color', () => {
    render(<ProgressBar progress={50} color="red" />);

    expect(screen.getByTestId('$red10')).toBeInTheDocument();
  });

  it('renders with default gray color', () => {
    render(<ProgressBar progress={50} />);

    expect(screen.getByTestId('$gray10')).toBeInTheDocument();
  });
});
