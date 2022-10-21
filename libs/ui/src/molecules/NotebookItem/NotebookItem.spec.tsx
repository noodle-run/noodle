import { render, screen } from '@testing-library/react';
import { NotebookItem } from './NotebookItem';

describe('NotebookItem molecule', () => {
  it('renders the label and emoji', () => {
    render(
      <NotebookItem
        emoji="🤖"
        title="AI"
        lastEdited="2 days ago"
        label={{ name: 'Artificial Intelligence', color: 'blue' }}
        href="/notebooks/ai"
      />,
    );

    expect(screen.getByText('AI')).toBeInTheDocument();
    expect(screen.getByText('🤖')).toBeInTheDocument();
  });

  it('renders correct lastEdited time', () => {
    render(
      <NotebookItem
        emoji="🤖"
        title="AI"
        lastEdited="2 days ago"
        label={{ name: 'Artificial Intelligence', color: 'blue' }}
        href="/notebooks/ai"
      />,
    );

    expect(screen.getByText('2 days ago')).toBeInTheDocument();
  });
});
