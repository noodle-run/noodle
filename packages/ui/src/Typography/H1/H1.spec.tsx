import { render, screen } from '@noodle/test-utils/renderer';

import { TypographyH1 } from '.';

describe('Typography H1', () => {
  it('should render children', () => {
    render(
      <TypographyH1>The quick brown fox jumps over the lazy dog.</TypographyH1>,
    );

    expect(
      screen.getByText('The quick brown fox jumps over the lazy dog.'),
    ).toBeInTheDocument();
  });

  it('should render with custom class name', () => {
    render(
      <TypographyH1 className="custom-class-name">
        The quick brown fox jumps over the lazy dog.
      </TypographyH1>,
    );

    expect(
      screen.getByText('The quick brown fox jumps over the lazy dog.'),
    ).toHaveClass('custom-class-name');
  });
});
