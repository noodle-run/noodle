import { render, screen } from '@testing-library/react';

import Home from '@/pages/index';

describe('Home page', () => {
  it('should render the home page', () => {
    render(<Home />);

    expect(screen.getByText(/home page/i)).toBeInTheDocument();
  });
});
