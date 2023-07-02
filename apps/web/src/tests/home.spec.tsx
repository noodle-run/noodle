import { SessionContext } from 'next-auth/react';

import { AllTheProviders, render, screen } from '@noodle/test-utils/renderer';

import Home from '@/pages/index';

describe('Home page', () => {
  it('should render the home page', async () => {
    render(<Home />, {
      wrapper: ({ children }) => (
        <AllTheProviders>
          <SessionContext.Provider
            value={{
              data: {
                user: {
                  id: '1',
                  name: 'John Doe',
                },
                expires: '1',
              },
              status: 'authenticated',
              update: vi.fn(),
            }}
          >
            {children}
          </SessionContext.Provider>
        </AllTheProviders>
      ),
    });

    expect(
      await screen.findByText(/hello there, john doe/i),
    ).toBeInTheDocument();
  });
});
