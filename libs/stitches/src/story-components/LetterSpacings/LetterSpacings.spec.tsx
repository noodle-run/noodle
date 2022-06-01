import { render, screen } from '@testing-library/react';
import { letterSpacings } from '../../typography';
import { LetterSpacings } from './LetterSpacings';

describe('Letter Spacings story component', () => {
  it.each(Object.keys(letterSpacings))(
    'renders the text with the letter spacing %s',
    (name) => {
      render(<LetterSpacings />);

      expect(screen.getByText(`${name}:`)).toBeInTheDocument();
    },
  );
});
