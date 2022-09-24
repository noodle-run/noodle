import { render, screen } from '@testing-library/react';
import MockDate from 'mockdate';
import { Greeting } from './Greeting';

describe('Greeting molecules', () => {
  it('renders the name of the user', () => {
    render(<Greeting name="John Doe" quote="My simple quote" />);

    expect(screen.getByText(/john doe/i)).toBeInTheDocument();
  });

  it('renders the quote', () => {
    render(<Greeting name="John Doe" quote="My simple quote" />);

    expect(screen.getByText(/my simple quote/i)).toBeInTheDocument();
  });

  it('renders good morning', () => {
    MockDate.set('2021-01-01T06:00:00.000Z');
    render(<Greeting name="John Doe" quote="My simple quote" />);

    expect(screen.getByText(/good morning/i)).toBeInTheDocument();
  });

  it('renders good afternoon', () => {
    MockDate.set('2021-01-01T12:00:00.000Z');
    render(<Greeting name="John Doe" quote="My simple quote" />);

    expect(screen.getByText(/good afternoon/i)).toBeInTheDocument();
  });

  it('renders good evening', () => {
    MockDate.set('2021-01-01T18:00:00.000Z');
    render(<Greeting name="John Doe" quote="My simple quote" />);

    expect(screen.getByText(/good evening/i)).toBeInTheDocument();
  });
});
