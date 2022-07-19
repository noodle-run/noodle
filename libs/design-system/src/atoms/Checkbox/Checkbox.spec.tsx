import { render, screen } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('Button atom', () => {
  it('renders an unchecked checkbox', () => {
    render(<Checkbox />);

    expect(screen.getByTestId('default')).toBeInTheDocument();
  });
  it('renders a checked checkbox', () => {
    render(<Checkbox checked />);

    expect(screen.getByTestId('checked')).toBeInTheDocument();
  });
});
