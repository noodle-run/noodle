import { render, screen } from '@noodle/test-utils/renderer';

import { Typography } from './typography';

describe('typography component', () => {
  it('should render the component', () => {
    render(<Typography />);

    expect(screen.getByText(/button/i)).toBeInTheDocument();
  });
});
