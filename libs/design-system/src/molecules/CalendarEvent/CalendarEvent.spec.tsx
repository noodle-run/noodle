import { render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { CalendarEvent } from './CalendarEvent';

const args: ComponentProps<typeof CalendarEvent> = {
  label: 'Algorithms and Complexity',
  startTime: '8AM',
  endTime: '9AM',
  children: 'Join',
  color: 'indigo',
  barColor: 'red',
};

describe('CalendarEvent Molecule', () => {
  it('renders the Event label', () => {
    render(<CalendarEvent {...args} />);

    expect(screen.getByText(args.label)).toBeInTheDocument();
  });

  it('renders the Event start and end times', () => {
    render(<CalendarEvent {...args} />);

    expect(
      screen.getByText(`${args.startTime} - ${args.endTime}`),
    ).toBeInTheDocument();
  });
});
