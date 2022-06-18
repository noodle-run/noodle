import { render, screen } from '@testing-library/react';
import { Tag } from './Tag';

describe('Tag atom', () => {
  it('should render a div with a role of presentation', () => {
    render(<Tag color="$blue10" />);

    expect(screen.getByRole('presentation')).toBeInTheDocument();
  });

  it('should render a div with the color prop value', () => {
    render(<Tag color="$blue10" />);

    expect(screen.getByTestId('$blue10')).toBeInTheDocument();
  });
});
