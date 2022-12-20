import { render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { ModuleCard } from './ModuleCard';

const args: ComponentProps<typeof ModuleCard> = {
  href: '/modules/1',
  name: 'Algorithms and Complexity',
  code: 'CS2860',
  tasks: 3,
  color: 'red',
  progress: 45,
  icon: '🧠',
};

describe('Module Card Molecule', () => {
  it('should render link with correct href', () => {
    render(<ModuleCard {...args} />);

    expect(screen.getByRole('link')).toHaveAttribute('href', args.href);
  });

  it('should render icon', () => {
    render(<ModuleCard {...args} />);

    expect(screen.getByText(args.icon as string)).toBeInTheDocument();
  });

  it('should render name', () => {
    render(<ModuleCard {...args} />);

    expect(screen.getByText(args.name)).toBeInTheDocument();
  });

  it('should render code', () => {
    render(<ModuleCard {...args} />);

    expect(screen.getByText(args.code)).toBeInTheDocument();
  });

  it('should render task remaining', () => {
    render(<ModuleCard {...args} tasks={1} />);

    expect(screen.getByText('1 task remaining')).toBeInTheDocument();
  });

  it('should render tasks remaining', () => {
    render(<ModuleCard {...args} />);

    expect(
      screen.getByText(`${args.tasks as number} tasks remaining`),
    ).toBeInTheDocument();
  });

  it('should render with correct color progress bar', () => {
    render(<ModuleCard {...args} />);

    expect(screen.getByRole('presentation')).toHaveClass('bg-red-400');
  });

  it('should render the loading skeleton when variant is loading', () => {
    render(<ModuleCard variant="loading" />);

    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('should not render skeleton when variant is default', () => {
    render(<ModuleCard {...args} />);

    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });
});
