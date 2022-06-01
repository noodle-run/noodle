import { render, screen } from '@testing-library/react';
import { lineHeights } from '../../typography';
import { LineHeights } from './LineHeights';

describe('Line heights story component', () => {
  it.each(Object.keys(lineHeights))(
    'renders the text with the line height %s',
    (name) => {
      render(<LineHeights />);

      expect(screen.getByText(`${name}:`)).toBeInTheDocument();
    },
  );
});
