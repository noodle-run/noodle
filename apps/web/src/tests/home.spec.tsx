import { mockNextAuth, render, screen } from '@noodle/test-utils/renderer';

import Home from '@/pages/index';

describe('Home page', () => {
  it('should render the home page', async () => {
    mockNextAuth({
      session: {
        user: {
          id: '1',
          name: 'John Doe',
        },
      },
      status: 'authenticated',
    });
    render(<Home />);

    expect(await screen.findByText(/hello john doe/i)).toBeInTheDocument();
  });
});
