import { render, screen } from '@noodle/test-utils/renderer';

import { Typography } from '.';

describe('Typography H1', () => {
  it('should render the children', () => {
    render(
      <Typography.H1>
        The quick brown fox jumps over the lazy dog.
      </Typography.H1>,
    );

    expect(
      screen.getByText('The quick brown fox jumps over the lazy dog.'),
    ).toBeInTheDocument();
  });

  it('should render with custom className', () => {
    render(
      <Typography.H1 className="custom-class">
        The quick brown fox jumps over the lazy dog.
      </Typography.H1>,
    );

    expect(
      screen.getByText('The quick brown fox jumps over the lazy dog.'),
    ).toHaveClass('custom-class');
  });
});
