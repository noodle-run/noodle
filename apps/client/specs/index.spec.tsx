import { render, screen } from '@testing-library/react';
import { useSession } from 'next-auth/react';
import Home from '../pages/index';
import { useQuery } from '../utils/trpc';

jest.mock('../utils/trpc');
jest.mock('next-auth/react');

describe('Home', () => {
  it('should render title', () => {
    (useSession as jest.Mock).mockReturnValueOnce({
      data: false,
      status: 'unauthenticated',
    });
    (useQuery as jest.Mock).mockImplementation(() => ({
      data: {
        greeting: 'greeting',
      },
    }));
    render(<Home />);
    expect(
      screen.getByText(/noodle - student productivity platform./i),
    ).toBeInTheDocument();
  });
});
