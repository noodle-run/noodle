import { render, screen } from '@noodle/test-utils/renderer';

import { TypographyP } from '.';

describe('Typography P', () => {
  it('should render children', () => {
    render(
      <TypographyP>The quick brown fox jumps over the lazy dog.</TypographyP>,
    );

    expect(
      screen.getByText('The quick brown fox jumps over the lazy dog.'),
    ).toBeInTheDocument();
  });

  it('should render with custom class name', () => {
    render(
      <TypographyP className="custom-class-name">
        The quick brown fox jumps over the lazy dog.
      </TypographyP>,
    );

    expect(
      screen.getByText('The quick brown fox jumps over the lazy dog.'),
    ).toHaveClass('custom-class-name');
  });
});
