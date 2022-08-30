import { render, screen } from '@testing-library/react';
import { InlineCode } from './InlineCode';

describe('Editor Inline code mark', () => {
  it('should render children', () => {
    render(<InlineCode>inline code</InlineCode>);

    expect(screen.getByText(/inline code/i)).toBeInTheDocument();
  });
});
