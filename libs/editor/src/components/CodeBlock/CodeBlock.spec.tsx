import { render, screen } from '@testing-library/react';
import { CodeBlock } from './CodeBlock';

describe('CodeBlock element', () => {
  it('should render children', () => {
    render(<CodeBlock>Hello World</CodeBlock>);

    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });
});
