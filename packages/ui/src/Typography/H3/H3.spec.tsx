import { render, screen } from '@noodle/test-utils/renderer';

import { TypographyH3 } from '.';

describe('Typography H3', () => {
  it('should render children', () => {
    render(
      <TypographyH3>The quick brown fox jumps over the lazy dog.</TypographyH3>,
    );

    expect(
      screen.getByText('The quick brown fox jumps over the lazy dog.'),
    ).toBeInTheDocument();
  });

  it('should render with custom class name', () => {
    render(
      <TypographyH3 className="custom-class-name">
        The quick brown fox jumps over the lazy dog.
      </TypographyH3>,
    );

    expect(
      screen.getByText('The quick brown fox jumps over the lazy dog.'),
    ).toHaveClass('custom-class-name');
  });
});
