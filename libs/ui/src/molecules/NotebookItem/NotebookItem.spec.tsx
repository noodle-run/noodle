import { render, screen } from '@testing-library/react';
import { NotebookItem } from './NotebookItem';

describe('NotebookItem molecule', () => {
  it('renders the label and emoji', () => {
    render(
      <NotebookItem
        icon="🤖"
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
        icon="🤖"
        title="AI"
        lastEdited="2 days ago"
        label={{ name: 'Artificial Intelligence', color: 'blue' }}
        href="/notebooks/ai"
      />,
    );

    expect(screen.getByText('2 days ago')).toBeInTheDocument();
  });

  it('should render the loading skeleton when variant is loading', () => {
    render(<NotebookItem variant="loading" />);

    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('should not render skeleton when variant is default', () => {
    render(
      <NotebookItem
        icon="🤖"
        title="AI"
        lastEdited="2 days ago"
        label={{ name: 'Artificial Intelligence', color: 'blue' }}
        href="/notebooks/ai"
      />,
    );

    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });
});
