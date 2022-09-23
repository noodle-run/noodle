import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dashboard } from './Dashboard';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('Dashboard template', () => {
  it('renders the logo', () => {
    render(<Dashboard>Dashboard</Dashboard>);

    expect(screen.getByTitle(/brand/i)).toBeInTheDocument();
  });

  it('renders the children', () => {
    render(<Dashboard>Dashboard template</Dashboard>);

    expect(screen.getByText(/dashboard template/i)).toBeInTheDocument();
  });

  it('opens and closes the menu on mobile', async () => {
    render(<Dashboard>Dashboard</Dashboard>);

    const button = screen.getByRole('button');

    expect(screen.getByTestId('menu-0')).toBeInTheDocument();
    expect(screen.getByTitle('Open menu')).toBeInTheDocument();
    expect(screen.queryByTitle('Close menu')).not.toBeInTheDocument();

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      await userEvent.click(button);
    });

    expect(screen.getByTestId('menu-auto')).toBeInTheDocument();
    expect(screen.queryByTitle('Open menu')).not.toBeInTheDocument();
    expect(screen.getByTitle('Close menu')).toBeInTheDocument();
  });

  it('renders the menu with auto height on desktop', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query: string) => ({
        matches: true,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    render(<Dashboard>Dashboard</Dashboard>);

    expect(screen.getByTestId('menu-auto')).toBeInTheDocument();
  });
});
