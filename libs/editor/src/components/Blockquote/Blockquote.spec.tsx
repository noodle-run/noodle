import { render, screen } from '@testing-library/react';
import { Blockquote } from './Blockquote';

describe('Blockquote element', () => {
  it('should render children', () => {
    render(<Blockquote>Hello World</Blockquote>);

    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });
});
