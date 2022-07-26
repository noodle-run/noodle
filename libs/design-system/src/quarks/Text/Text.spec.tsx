import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('Text quark', () => {
  it('renders the children', () => {
    render(<Text>Hello World</Text>);

    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });
});
