import { render, screen } from '@testing-library/react';
import { Greeting } from './Greeting';

describe('Greeting molecules', () => {
  it('should render the greeting', () => {
    render(<Greeting greeting="Good morning, John Doe!" quote="quote" />);

    expect(screen.getByText('Good morning, John Doe!')).toBeInTheDocument();
  });

  it('renders the quote', () => {
    render(<Greeting greeting="Good morning!" quote="My simple quote" />);

    expect(screen.getByText(/my simple quote/i)).toBeInTheDocument();
  });
});
