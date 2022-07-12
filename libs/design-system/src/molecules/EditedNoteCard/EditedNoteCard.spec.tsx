import { render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { EditedNoteCard } from './EditedNoteCard';

const args: ComponentProps<typeof EditedNoteCard> = {
  noteTitle: '✨ History of Artificial Intelligence',
  lastEdited: new Date(),
  labelName: 'Artificia Intelligence',
  labelColor: 'red',
  isStarred: false,
};

describe('EditedNoteCard Molecule', () => {
  it('renders the noteTitle', () => {
    render(<EditedNoteCard {...args} />);

    expect(screen.getByText(args.noteTitle)).toBeInTheDocument();
  });

  it('renders the lastEdited', () => {
    render(<EditedNoteCard {...args} />);

    expect(screen.getByText('0 seconds ago')).toBeInTheDocument();
  });

  it('renders the labelName', () => {
    render(<EditedNoteCard {...args} />);

    expect(screen.getByText(args.labelName)).toBeInTheDocument();
  });

  it('renders the labelColor', () => {
    render(<EditedNoteCard {...args} />);

    expect(screen.getByDisplayValue(args.labelColor)).toBeInTheDocument();
  });
});
