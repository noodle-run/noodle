import { render, screen } from '@noodle/test-utils/renderer';

import { AspectRatio } from '.';

describe('Aspect Ratio', () => {
  it('should render children', () => {
    render(
      <AspectRatio ratio={16 / 9}>
        <div>children</div>
      </AspectRatio>,
    );

    expect(screen.getByText('children')).toBeInTheDocument();
  });
});
