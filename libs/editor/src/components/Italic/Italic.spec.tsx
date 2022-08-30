import { render, screen } from '@testing-library/react';
import { Italic } from './Italic';

describe('Editor Italic mark', () => {
  it('should render children', () => {
    render(<Italic>italic text</Italic>);

    expect(screen.getByText(/italic text/i)).toBeInTheDocument();
  });
});
