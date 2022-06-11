import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import { useQuery } from '../utils/trpc';

jest.mock('../utils/trpc');

describe('Home', () => {
  it('should render hello world', () => {
    (useQuery as jest.Mock).mockImplementation(() => ({
      data: {
        greeting: 'greeting',
      },
    }));
    render(<Home />);
    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });

  it('should render greeting', () => {
    (useQuery as jest.Mock).mockImplementation(() => ({
      data: {
        greeting: 'greeting',
      },
    }));
    render(<Home />);
    expect(screen.getByText(/greeting/i)).toBeInTheDocument();
  });

  it('should render loading when data is loading', () => {
    (useQuery as jest.Mock).mockImplementation(() => ({
      isLoading: true,
    }));
    render(<Home />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('should render error on fetch failure', () => {
    (useQuery as jest.Mock).mockImplementation(() => ({
      error: {
        message: 'oops',
      },
    }));
    render(<Home />);
    expect(screen.getByText(/oops/i)).toBeInTheDocument();
  });
});
