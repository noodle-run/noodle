import { render, screen } from '@noodle/test-utils/renderer';

import { TypographyH2 } from '.';

describe('Typography H2', () => {
  it('should render children', () => {
    render(
      <TypographyH2>The quick brown fox jumps over the lazy dog.</TypographyH2>,
    );

    expect(
      screen.getByText('The quick brown fox jumps over the lazy dog.'),
    ).toBeInTheDocument();
  });

  it('should render with custom class name', () => {
    render(
      <TypographyH2 className="custom-class-name">
        The quick brown fox jumps over the lazy dog.
      </TypographyH2>,
    );

    expect(
      screen.getByText('The quick brown fox jumps over the lazy dog.'),
    ).toHaveClass('custom-class-name');
  });
});
