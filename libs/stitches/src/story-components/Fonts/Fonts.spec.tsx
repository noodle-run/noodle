import { render, screen } from '@testing-library/react';
import { Fonts } from './Fonts';

describe('Fonts story component', () => {
  it('renders the text', () => {
    render(<Fonts />);

    expect(
      screen.getByText(/the quick brown fox jumps over the lazy dog/i),
    ).toBeInTheDocument();
  });
});
