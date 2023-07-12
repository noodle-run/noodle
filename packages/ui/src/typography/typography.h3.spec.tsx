import { render, screen } from '@noodle/test-utils/renderer';

import { Typography } from '.';

describe('Typography H3', () => {
  it('should render the children', () => {
    render(
      <Typography.H3>
        The quick brown fox jumps over the lazy dog.
      </Typography.H3>,
    );

    expect(
      screen.getByText('The quick brown fox jumps over the lazy dog.'),
    ).toBeInTheDocument();
  });

  it('should render with custom className', () => {
    render(
      <Typography.H3 className="custom-class">
        The quick brown fox jumps over the lazy dog.
      </Typography.H3>,
    );

    expect(
      screen.getByText('The quick brown fox jumps over the lazy dog.'),
    ).toHaveClass('custom-class');
  });
});
