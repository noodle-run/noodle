import { render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { EditedNoteCard } from './NotebookLink';

const args: ComponentProps<typeof EditedNoteCard> = {
  href: '/',
  title: '✨ History of Artificial Intelligence',
  lastEdited: new Date(),
  label: 'Artificial Intelligence',
  labelColor: 'red',
  isStarred: false,
};

describe('EditedNoteCard Molecule', () => {
  it('renders the noteTitle', () => {
    render(<EditedNoteCard {...args} />);

    expect(screen.getByText(args.title)).toBeInTheDocument();
  });

  it('renders the lastEdited', () => {
    render(<EditedNoteCard {...args} />);

    expect(screen.getByText('0 seconds ago')).toBeInTheDocument();
  });

  it('renders the labelName', () => {
    render(<EditedNoteCard {...args} />);

    expect(screen.getByText(args.label)).toBeInTheDocument();
  });
});
