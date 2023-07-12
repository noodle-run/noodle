import { render, screen } from '@noodle/test-utils/renderer';

import { Typography } from '.';

describe('Typography H4', () => {
  it('should render the children', () => {
    render(
      <Typography.H4>
        The quick brown fox jumps over the lazy dog.
      </Typography.H4>,
    );

    expect(
      screen.getByText('The quick brown fox jumps over the lazy dog.'),
    ).toBeInTheDocument();
  });

  it('should render with custom className', () => {
    render(
      <Typography.H4 className="custom-class">
        The quick brown fox jumps over the lazy dog.
      </Typography.H4>,
    );

    expect(
      screen.getByText('The quick brown fox jumps over the lazy dog.'),
    ).toHaveClass('custom-class');
  });
});
