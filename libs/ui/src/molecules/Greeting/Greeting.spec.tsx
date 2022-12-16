import { render, screen } from '@testing-library/react';
import { Greeting } from './Greeting';

describe('Greeting molecules', () => {
  it('renders the greeting', () => {
    render(
      <Greeting
        isLoading={false}
        greeting="Good morning"
        quote="The best way to predict the future is to invent it."
      />,
    );

    expect(screen.getByText('Good morning')).toBeInTheDocument();
  });

  it('renders the quote', () => {
    render(
      <Greeting
        isLoading={false}
        greeting="Good morning"
        quote="The best way to predict the future is to invent it."
      />,
    );

    expect(
      screen.getByText('The best way to predict the future is to invent it.'),
    ).toBeInTheDocument();
  });

  it('renders the skeleton', () => {
    render(
      <Greeting
        isLoading
        greeting="Good morning"
        quote="The best way to predict the future is to invent it."
      />,
    );

    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it("doesn't render anything when no loading and no greeting", () => {
    render(<Greeting isLoading={false} />);

    expect(screen.queryByText('Good morning')).not.toBeInTheDocument();
  });
});
