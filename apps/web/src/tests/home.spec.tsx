import { render, screen } from '@noodle/test-utils/renderer';

import Home from '@/pages';

describe('Home page', () => {
  it('should render the title and description', () => {
    render(<Home />);

    expect(screen.getByText('Noodle')).toBeInTheDocument();
    expect(
      screen.getByText(/rethinking student productivity/i),
    ).toBeInTheDocument();
  });
});
