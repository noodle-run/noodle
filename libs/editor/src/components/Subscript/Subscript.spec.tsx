import { render, screen } from '@testing-library/react';
import { Subscript } from './Subscript';

describe('Editor Subscript mark', () => {
  it('should render children', () => {
    render(<Subscript>Subscript text</Subscript>);

    expect(screen.getByText(/subscript text/i)).toBeInTheDocument();
  });
});
