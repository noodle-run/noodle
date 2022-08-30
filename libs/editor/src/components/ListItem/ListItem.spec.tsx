import { render, screen } from '@testing-library/react';
import { UnorderedList } from '../UnorderedList';
import { ListItem } from './ListItem';

describe('Editor list item element', () => {
  it('renders the children', () => {
    render(
      <UnorderedList>
        <ListItem>Item one</ListItem>
      </UnorderedList>,
    );

    expect(screen.getByText(/item one/i)).toBeInTheDocument();
  });
});
