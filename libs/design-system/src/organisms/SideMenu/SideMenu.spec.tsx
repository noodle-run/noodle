import { render, screen } from '@testing-library/react';
import { SideMenu } from './SideMenu';

describe('SideMenu organism', () => {
  it('renders the brand icon', () => {
    render(<SideMenu />);

    const brand = screen.getByTitle(/brand/i);
    expect(brand).toBeInTheDocument();
  });

  it('renders the page links', () => {
    render(<SideMenu />);

    const today = screen.getByText(/today's activity/i);
    const modules = screen.getByText(/modules/i);
    const todos = screen.getByText(/todos/i);
    const assignments = screen.getByText(/assignments/i);
    const calendar = screen.getByText(/calendar/i);

    expect(today).toBeInTheDocument();
    expect(modules).toBeInTheDocument();
    expect(todos).toBeInTheDocument();
    expect(assignments).toBeInTheDocument();
    expect(calendar).toBeInTheDocument();
  });
});
