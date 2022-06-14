import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';

describe('Input field atom', () => {
  it('renders an input field', () => {
    render(<Input />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders the input field with a value', () => {
    render(<Input value="initial value" />);

    expect(screen.getByRole('textbox')).toHaveValue('initial value');
  });

  it('emits the input onchange when typed into it', async () => {
    const onChange = jest.fn();
    render(<Input onChange={onChange} />);

    await userEvent.type(screen.getByRole('textbox'), 'new value');

    expect(screen.getByRole('textbox')).toHaveValue('new value');
    expect(onChange).toHaveBeenCalledWith('new value');
  });

  it('renders the input field with an icon', () => {
    render(<Input icon={<p>look at me, im the icon now</p>} />);

    expect(screen.getByRole('presentation')).toBeInTheDocument();
  });
});
