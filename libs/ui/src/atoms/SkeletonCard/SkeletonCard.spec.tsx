import { render, screen } from '@testing-library/react';
import { SkeletonCard } from './SkeletonCard';

describe('Skeleton card atom', () => {
  it('should render successfully', () => {
    render(<SkeletonCard />);

    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});
