import { render, screen } from '@testing-library/react';
import { Heading } from './Heading';

describe('Heading component', () => {
  it('should render children', () => {
    render(<Heading>Heading</Heading>);

    expect(screen.getByText(/heading/i)).toBeInTheDocument();
  });
});
