import { render, screen } from '@testing-library/react';
import { NotFound } from './NotFound';

describe('Not found page', () => {
  it('should render the title', () => {
    render(<NotFound />);

    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });
});
