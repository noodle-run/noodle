import { render, screen } from '@testing-library/react';
import { Transitions } from './Transitions';

describe('Transitions story component', () => {
  it('renders the hover me text', () => {
    render(<Transitions />);

    expect(screen.getByText(/hover me/i)).toBeInTheDocument();
  });
});
