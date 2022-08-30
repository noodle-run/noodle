import { render, screen } from '@testing-library/react';
import { Bold } from './Bold';

describe('Editor bold mark', () => {
  it('should render children', () => {
    render(<Bold>Strong text</Bold>);

    expect(screen.getByText(/strong text/i)).toBeInTheDocument();
  });
});
