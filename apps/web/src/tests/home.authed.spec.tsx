import userEvent from '@testing-library/user-event';
import * as nextAuthReact from 'next-auth/react';

import { type Session } from '@noodle/auth';
import { render, screen } from '@noodle/test-utils/renderer';

import Home from '@/pages/index';

vi.mock('next-auth/react', async () => {
  const originalModule: Record<string, unknown> = await vi.importActual(
    'next-auth/react',
  );
  const mockSession: Session = {
    expires: new Date(Date.now() + 2 * 86400).toISOString(),
    user: {
      id: '1',
      name: 'John Doe',
    },
  };
  return {
    __esModule: true,
    ...originalModule,
    signOut: vi.fn(),
    useSession: vi.fn(() => {
      return { data: mockSession, status: 'authenticated' };
    }),
  };
});

describe('Home page', () => {
  it('should render the user name', async () => {
    render(<Home />);

    expect(
      await screen.findByText(/hello there, john doe/i),
    ).toBeInTheDocument();
  });

  it('should log out when the sign out button is clicked', async () => {
    const spy = vi.spyOn(nextAuthReact, 'signOut');

    render(<Home />);

    const button = await screen.findByRole('button', {
      name: /sign out/i,
    });

    expect(button).toBeInTheDocument();

    await userEvent.click(button);

    expect(spy).toHaveBeenCalled();
  });
});
