import { render, screen } from '@testing-library/react';
import { UnorderedList } from './UnorderedList';

describe('Editor unordered list element', () => {
  it('renders the children', () => {
    render(
      <UnorderedList>
        <li>Item one</li>
      </UnorderedList>,
    );

    expect(screen.getByText(/item one/i)).toBeInTheDocument();
  });
});
