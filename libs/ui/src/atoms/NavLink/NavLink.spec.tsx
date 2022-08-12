import { render, screen } from '@testing-library/react';
import { NavLink } from './NavLink';

describe('NavLink atom', () => {
  it('renders the children', () => {
    render(<NavLink href="/">Home</NavLink>);

    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });

  it('renders with active styles', () => {
    render(<NavLink href="/">Home</NavLink>);

    expect(screen.getByText(/home/i)).toHaveClass('text-primary-500');
  });

  it('renders the element with correct href', () => {
    const href = '/about';
    render(<NavLink href={href}>About</NavLink>);

    expect(screen.getByText(/about/i)).toHaveAttribute('href', href);
  });

  it('renders an external link', () => {
    const href = 'https://github.com/ixahmedxi/noodle';
    render(
      <NavLink href={href} external>
        Github
      </NavLink>,
    );

    const element = screen.getByText(/github/i);
    expect(element).toHaveAttribute('target', '_blank');
    expect(element).toHaveAttribute('rel', 'noreferrer noopener');
    expect(element).toHaveAttribute('href', href);
  });
});
