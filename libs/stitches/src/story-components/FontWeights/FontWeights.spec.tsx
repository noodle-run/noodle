import { render, screen } from '@testing-library/react';
import { fontWeights } from '../../typography';
import { FontWeights } from './FontWeights';

describe('FontWeights story component', () => {
  it.each(Object.entries(fontWeights))(
    'renders the name of %s weight',
    (name) => {
      render(<FontWeights />);

      expect(screen.getByText(`${name}:`)).toBeInTheDocument();
    },
  );
});
