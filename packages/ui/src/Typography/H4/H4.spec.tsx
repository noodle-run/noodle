import { render, screen } from '@noodle/test-utils/renderer';

import { TypographyH4 } from '.';

describe('Typography H4', () => {
  it('should render children', () => {
    render(
      <TypographyH4>The quick brown fox jumps over the lazy dog.</TypographyH4>,
    );

    expect(
      screen.getByText('The quick brown fox jumps over the lazy dog.'),
    ).toBeInTheDocument();
  });

  it('should render with custom class name', () => {
    render(
      <TypographyH4 className="custom-class-name">
        The quick brown fox jumps over the lazy dog.
      </TypographyH4>,
    );

    expect(
      screen.getByText('The quick brown fox jumps over the lazy dog.'),
    ).toHaveClass('custom-class-name');
  });
});
