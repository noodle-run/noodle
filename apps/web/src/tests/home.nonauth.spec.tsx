import userEvent from '@testing-library/user-event';
import * as nextAuthReact from 'next-auth/react';

import { render, screen } from '@noodle/test-utils/renderer';

import Home from '@/pages/index';

vi.mock('next-auth/react', async () => {
  const originalModule: Record<string, unknown> = await vi.importActual(
    'next-auth/react',
  );
  const mockSession = {
    expires: new Date(Date.now() + 2 * 86400).toISOString(),
    user: undefined,
  };
  return {
    __esModule: true,
    ...originalModule,
    signIn: vi.fn(),
    useSession: vi.fn(() => {
      return { data: mockSession, status: 'unauthenticated' };
    }),
  };
});

describe('Home page', () => {
  it('should render the home page', async () => {
    render(<Home />);

    expect(
      await screen.findByText(/noodle - open source education platform/i),
    ).toBeInTheDocument();
  });

  it('should render hello from api', async () => {
    render(<Home />);

    expect(await screen.findByText(/hello world/i)).toBeInTheDocument();
  });

  it('should render the sign in button', async () => {
    const spy = vi.spyOn(nextAuthReact, 'signIn');

    render(<Home />);

    const button = await screen.findByRole('button', {
      name: /sign in with github/i,
    });

    expect(button).toBeInTheDocument();

    await userEvent.click(button);

    expect(spy).toHaveBeenCalledWith('github');
  });
});
