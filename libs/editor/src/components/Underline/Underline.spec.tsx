import { render, screen } from '@testing-library/react';
import { Underline } from './Underline';

describe('Editor Underline mark', () => {
  it('should render children', () => {
    render(<Underline>Underline text</Underline>);

    expect(screen.getByText(/underline text/i)).toBeInTheDocument();
  });
});
