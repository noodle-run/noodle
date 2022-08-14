import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Navbar } from './Navbar';

describe('Navigation bar template', () => {
  it('opens the navbar when menu button is clicked', async () => {
    render(<Navbar />);

    const button = screen.getByRole('button');

    expect(screen.getByTestId('pages-links')).not.toHaveClass('absolute');

    await userEvent.click(button);

    expect(screen.getByTestId('pages-links')).toHaveClass('absolute');
  });

  it('renders the close icon when navbar is open', async () => {
    render(<Navbar />);

    expect(screen.getByTitle(/open-menu/i)).toBeInTheDocument();

    const button = screen.getByRole('button');

    await userEvent.click(button);

    expect(screen.getByTitle(/close-menu/i)).toBeInTheDocument();
  });
});
