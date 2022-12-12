import { render, screen } from '@testing-library/react';
import { Greeting } from './Greeting';

describe('Greeting molecules', () => {
  it('renders the greeting', () => {
    render(
      <Greeting
        greeting="Good morning"
        quote="The best way to predict the future is to invent it."
      />,
    );

    expect(screen.getByText('Good morning')).toBeInTheDocument();
  });

  it('renders the quote', () => {
    render(
      <Greeting
        greeting="Good morning"
        quote="The best way to predict the future is to invent it."
      />,
    );

    expect(
      screen.getByText('The best way to predict the future is to invent it.'),
    ).toBeInTheDocument();
  });
});
