import { render, screen } from '@testing-library/react';
import { Center } from './Center';

describe('Center quark', () => {
  it('renders the children', () => {
    render(<Center>Hello World</Center>);

    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });
});
