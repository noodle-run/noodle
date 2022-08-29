import { render, screen } from '@testing-library/react';
import { OrderedList } from './OrderedList';

describe('Editor unordered list element', () => {
  it('renders the children', () => {
    render(
      <OrderedList>
        <li>Item one</li>
      </OrderedList>,
    );

    expect(screen.getByText(/item one/i)).toBeInTheDocument();
  });
});
