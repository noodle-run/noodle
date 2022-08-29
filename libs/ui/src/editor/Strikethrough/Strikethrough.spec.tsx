import { render, screen } from '@testing-library/react';
import { Strikethrough } from './Strikethrough';

describe('Editor Strikethrough mark', () => {
  it('should render children', () => {
    render(<Strikethrough>Strikethrough text</Strikethrough>);

    expect(screen.getByText(/strikethrough text/i)).toBeInTheDocument();
  });
});
