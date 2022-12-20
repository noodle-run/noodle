import { render, screen } from '@testing-library/react';
import { SkeletonNotebookItem } from './SkeletonNotebookItem';

describe('Skeleton notebook item atom', () => {
  it('should render correctly', () => {
    render(<SkeletonNotebookItem />);

    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});
