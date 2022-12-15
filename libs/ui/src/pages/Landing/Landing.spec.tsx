import { render, screen } from '@testing-library/react';
import { Landing } from './Landing';

describe('Landing page', () => {
  it('renders the heading', () => {
    const onWaitListFormSubmit = jest.fn();
    render(<Landing onWaitListFormSubmit={onWaitListFormSubmit} />);

    expect(
      screen.getByText(/rethinking student productivity/i),
    ).toBeInTheDocument();
  });
});
