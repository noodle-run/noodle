import { render, screen } from '@testing-library/react';

import { Typography } from './typography';

describe('typography component', () => {
  it('should render the component', () => {
    render(<Typography />);

    expect(screen.getByText(/button/i)).toBeInTheDocument();
  });
});
