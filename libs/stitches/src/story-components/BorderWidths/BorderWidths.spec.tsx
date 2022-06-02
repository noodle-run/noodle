import { render, screen } from '@testing-library/react';
import { borderWidths } from '../../borderWidths';
import { BorderWidths } from './BorderWidths';

describe('Border widths story component', () => {
  it.each(Object.keys(borderWidths))('renders the border width %s', (value) => {
    render(<BorderWidths />);

    expect(screen.getByText(value)).toBeInTheDocument();
  });
});
