import { render, screen } from '@testing-library/react';
import { Dashboard } from './Dashboard';

const args = {
  userName: 'Ahmed Elsakaan',
  userCourse: 'Computer Science',
  userAvatar: 'https://avatars.githubusercontent.com/u/20271968?v=4',
};

describe('Dashboard template', () => {
  it('renders the logo', () => {
    render(<Dashboard {...args}>Dashboard</Dashboard>);

    expect(screen.getByTitle(/brand/i)).toBeInTheDocument();
  });

  it('renders the children', () => {
    render(<Dashboard {...args}>Dashboard template</Dashboard>);

    expect(screen.getByText(/dashboard template/i)).toBeInTheDocument();
  });
});
