import { render, screen } from '@testing-library/react';
import { radii } from '../../radii';
import { Radii } from './Radii';

describe('Radii story component', () => {
  it.each(Object.keys(radii))('renders the border radius %s', (value) => {
    render(<Radii />);

    expect(screen.getByText(value)).toBeInTheDocument();
  });
});
