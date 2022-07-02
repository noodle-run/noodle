import { render, screen } from '@testing-library/react';
import { Tag } from './Tag';

describe('Tag atom', () => {
  it('should render a div with a role of presentation', () => {
    render(<Tag color="blue" />);

    expect(screen.getByRole('presentation')).toBeInTheDocument();
  });

  it('should render a div with the color prop value', () => {
    render(<Tag color="blue" />);

    expect(screen.getByTestId('$blue10')).toBeInTheDocument();
  });

  it('should render a div with default gray color', () => {
    render(<Tag />);

    expect(screen.getByTestId('$gray10')).toBeInTheDocument();
  });
});
