import { render, screen } from '@noodle/test-utils/renderer';

import { Typography } from '.';

describe('Typography P', () => {
  it('should render the children', () => {
    render(
      <Typography.P>The quick brown fox jumps over the lazy dog.</Typography.P>,
    );

    expect(
      screen.getByText('The quick brown fox jumps over the lazy dog.'),
    ).toBeInTheDocument();
  });

  it('should render with custom className', () => {
    render(
      <Typography.P className="custom-class">
        The quick brown fox jumps over the lazy dog.
      </Typography.P>,
    );

    expect(
      screen.getByText('The quick brown fox jumps over the lazy dog.'),
    ).toHaveClass('custom-class');
  });
});
