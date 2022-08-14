import { render, screen } from '@testing-library/react';
import { Landing } from './Landing';

describe('Landing page', () => {
  it('renders the heading', () => {
    render(<Landing />);

    expect(
      screen.getByText(/rethinking student productivity/i),
    ).toBeInTheDocument();
  });
});
