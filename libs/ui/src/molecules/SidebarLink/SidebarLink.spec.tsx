import { render, screen } from '@testing-library/react';
import { SidebarLink } from './SidebarLink';

describe('SidebarLink molecule', () => {
  it('renders the label', () => {
    render(
      <SidebarLink
        label="Today's activity"
        href="/dashboard"
        icon={<p>Icon</p>}
      />,
    );

    expect(screen.getByText("Today's activity")).toBeInTheDocument();
  });

  it('renders the icon', () => {
    render(
      <SidebarLink
        label="Today's activity"
        href="/dashboard"
        icon={<p>Icon</p>}
      />,
    );

    expect(screen.getByText('Icon')).toBeInTheDocument();
  });

  it('renders the link', () => {
    render(
      <SidebarLink
        label="Today's activity"
        href="/dashboard"
        icon={<p>Icon</p>}
      />,
    );

    expect(screen.getByRole('link')).toHaveAttribute('href', '/dashboard');
  });
});
