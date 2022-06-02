import { render, screen } from '@testing-library/react';
import { shadows } from '../../shadows';
import { Shadows } from './Shadows';

describe('Shadows story component', () => {
  it.each(Object.keys(shadows))('renders the box shadow %s', (value) => {
    render(<Shadows />);

    expect(screen.getByText(value)).toBeInTheDocument();
  });
});
