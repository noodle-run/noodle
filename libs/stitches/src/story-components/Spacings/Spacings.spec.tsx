import { render, screen } from '@testing-library/react';
import { space } from '../../space';
import { Spacings } from './Spacings';

const entries = Object.entries(space);

describe('Spacings story component', () => {
  it.each(entries)('renders the boxes with %s width', (name) => {
    render(<Spacings />);

    expect(screen.getByTestId(name)).toBeInTheDocument();
  });

  it.each(entries)(
    'renders the text information about the %s space',
    (name, value) => {
      render(<Spacings />);

      expect(screen.getByText(`${name} - ${value}`)).toBeInTheDocument();
    },
  );
});
