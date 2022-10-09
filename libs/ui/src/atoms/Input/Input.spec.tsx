import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';

describe('Input atom', () => {
  it('should render value', () => {
    render(<Input label="Email address" defaultValue="johndoe@gmail.com" />);

    const inputElement = screen.getByTestId('input-atom');

    expect(inputElement).toHaveValue('johndoe@gmail.com');
  });

  it('should type into the input', async () => {
    const onChange = jest.fn();
    render(<Input label="Email address" onChange={onChange} />);

    const inputElement = screen.getByTestId('input-atom');

    await userEvent.type(inputElement, 'johndoe123@gmail.com');

    expect(onChange).toHaveBeenCalled();
  });
});
