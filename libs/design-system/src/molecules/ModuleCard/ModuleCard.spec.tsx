import { render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { ModuleCard } from './ModuleCard';

const args: ComponentProps<typeof ModuleCard> = {
  icon: '🖥',
  moduleName: 'Algorithms and Complexity',
  moduleCode: 'CS2850',
  credits: 15,
  tasksRemaining: 5,
  progress: 50,
  progressBarColor: 'red',
};

describe('ModuleCard Molecule', () => {
  it('renders the Module Emoji', () => {
    render(<ModuleCard {...args} />);

    expect(screen.getByText(args.icon)).toBeInTheDocument();
  });

  it('renders the Module Name', () => {
    render(<ModuleCard {...args} />);

    expect(screen.getByText(args.moduleName)).toBeInTheDocument();
  });

  it('renders the number of Credits', () => {
    render(<ModuleCard {...args} />);

    expect(screen.getByText(`${args.credits} Credits`)).toBeInTheDocument();
  });

  it('renders the number of Tasks remaining', () => {
    render(<ModuleCard {...args} />);

    expect(
      screen.getByText(`${args.tasksRemaining} Tasks remaining`),
    ).toBeInTheDocument();
  });
});
