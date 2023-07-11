import { render, screen } from '@noodle/test-utils/renderer';

import { Skeleton } from '.';

describe('Skeleton', () => {
  it('should render the component', () => {
    render(<Skeleton />);

    expect(screen.getByRole('presentation')).toHaveClass('animate-pulse');
  });
});
