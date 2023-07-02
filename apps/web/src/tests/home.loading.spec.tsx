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
    useSession: vi.fn(() => {
      return { data: mockSession, status: 'loading' };
    }),
  };
});

describe('Home page', () => {
  it('should render the loading screen', async () => {
    render(<Home />);

    expect(await screen.findByText(/loading.../i)).toBeInTheDocument();
  });
});
