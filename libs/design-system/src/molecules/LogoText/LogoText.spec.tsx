import { render, screen } from '@testing-library/react';
import { LogoText } from './LogoText';

describe('LogoText Molecule', () => {
  it('renders the LogoText', () => {
    render(<LogoText text="Noodle" size={50} />);

    expect(screen.getByText('Noodle')).toBeInTheDocument();
  });
});
