import { render, screen } from '@testing-library/react';
// eslint-disable-next-line import/no-named-as-default
import Checkbox from './Checkbox';

describe('Button atom', () => {
  it('renders an unchecked checkbox', () => {
    render(<Checkbox />);

    expect(screen.getByTestId('default')).toBeInTheDocument();
  });
  it('renders a checked checkbox', () => {
    render(<Checkbox isChecked />);

    expect(screen.getByTestId('checked')).toBeInTheDocument();
  });
});
