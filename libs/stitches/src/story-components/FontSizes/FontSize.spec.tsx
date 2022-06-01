import { render, screen } from '@testing-library/react';
import { fontSizes } from '../../typography';
import { FontSizes } from './FontSizes';

describe('FontSize story component', () => {
  it('renders the text in all sizes', () => {
    render(<FontSizes />);

    expect(
      screen.getAllByText(/the quick brown fox jumped over the lazy dog/i)
        .length,
    ).toBe(Object.keys(fontSizes).length);
  });
});
