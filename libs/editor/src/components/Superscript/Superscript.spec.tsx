import { render, screen } from '@testing-library/react';
import { Superscript } from './Superscript';

describe('Editor Superscript mark', () => {
  it('should render children', () => {
    render(<Superscript>Superscript text</Superscript>);

    expect(screen.getByText(/superscript text/i)).toBeInTheDocument();
  });
});
