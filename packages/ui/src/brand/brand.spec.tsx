import { render, screen } from '@noodle/test-utils/renderer';

import { Brand } from '.';

describe('Brand logo', () => {
  it('should render the logo', () => {
    render(<Brand />);

    expect(
      screen.getByTitle('Noodle - Rethinking Student Productivity'),
    ).toBeInTheDocument();
  });

  it('should render the logo with custom size', () => {
    render(<Brand size={200} />);

    expect(
      screen.getByTitle('Noodle - Rethinking Student Productivity')
        .parentElement,
    ).toHaveAttribute('width', '200');
    expect(
      screen.getByTitle('Noodle - Rethinking Student Productivity')
        .parentElement,
    ).toHaveAttribute('height', '200');
  });
});
