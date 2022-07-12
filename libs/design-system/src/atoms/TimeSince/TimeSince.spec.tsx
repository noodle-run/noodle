import { render, screen } from '@testing-library/react';
import { TimeSince } from './TimeSince';

describe('TimeSince atom', () => {
  it('should render 0 seconds ago for a now date', () => {
    render(<TimeSince date={new Date()} />);

    expect(screen.getByText('0 seconds ago')).toBeInTheDocument();
  });

  it('should render 13 minutes ago for a now date', () => {
    render(<TimeSince date={new Date(Date.now() - 13 * 60 * 1000)} />);

    expect(screen.getByText('13 minutes ago')).toBeInTheDocument();
  });

  it('should render 6 hours ago for a now date', () => {
    render(<TimeSince date={new Date(Date.now() - 6 * 60 * 60 * 1000)} />);

    expect(screen.getByText('6 hours ago')).toBeInTheDocument();
  });

  it('should render 6 days ago for a now date', () => {
    render(<TimeSince date={new Date(Date.now() - 6 * 60 * 60 * 24 * 1000)} />);

    expect(screen.getByText('6 days ago')).toBeInTheDocument();
  });

  it('should render 10 months ago for a now date', () => {
    render(
      <TimeSince date={new Date(Date.now() - 10 * 60 * 60 * 24 * 30 * 1000)} />,
    );

    expect(screen.getByText('10 months ago')).toBeInTheDocument();
  });

  it('should render 4 years ago for a now date', () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 4);
    render(<TimeSince date={date} />);

    expect(screen.getByText('4 years ago')).toBeInTheDocument();
  });

  it('should render Date must be in the past', () => {
    render(<TimeSince date={new Date(Date.now() + 1000)} />);

    expect(screen.getByText('Date must be in the past')).toBeInTheDocument();
  });

  it('should render hour', () => {
    render(<TimeSince date={new Date(Date.now() - 61 * 60 * 1000)} />);

    expect(screen.getByText('1 hour ago')).toBeInTheDocument();
  });
});
