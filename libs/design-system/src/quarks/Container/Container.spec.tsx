import { render, screen } from '@testing-library/react';
import { Container } from './Container';

describe('Container quark', () => {
  it('renders the children', () => {
    render(<Container>Hello World</Container>);

    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });
});
