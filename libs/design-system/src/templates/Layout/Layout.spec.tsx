import { render, screen } from '@testing-library/react';
import { Layout } from './Layout';

describe('Layout template', () => {
  it('renders the side menu', () => {
    render(
      <Layout sidemenu={<p>menu</p>}>
        <p>content</p>
      </Layout>,
    );

    expect(screen.getByText(/menu/i)).toBeInTheDocument();
  });

  it('renders the children', () => {
    render(
      <Layout sidemenu={<p>menu</p>}>
        <p>content</p>
      </Layout>,
    );

    expect(screen.getByText(/content/i)).toBeInTheDocument();
  });
});
