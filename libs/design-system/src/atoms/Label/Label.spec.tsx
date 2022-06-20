import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('Label atom', () => {
  it('should render the children', () => {
    render(<Label color="crimson">Label</Label>);

    expect(screen.getByText('Label')).toBeInTheDocument();
  });

  it('should render with the provided color', () => {
    render(<Label color="crimson">Label</Label>);

    expect(screen.getByTestId('$crimson10')).toBeInTheDocument();
  });
});
