import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import { Input } from './Input';

const args: ComponentProps<typeof Input> = {
  type: 'text',
  placeholder: 'Search...',
};

describe('Input field atom', () => {
  it('renders an input field', () => {
    render(<Input {...args} />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders the input field with a value', () => {
    render(<Input {...args} value="initial value" />);

    expect(screen.getByRole('textbox')).toHaveValue('initial value');
  });

  it('emits the input onchange when typed into it', async () => {
    const onChange = jest.fn();
    render(<Input {...args} onChange={onChange} />);

    await userEvent.type(screen.getByRole('textbox'), 'new value');

    expect(screen.getByRole('textbox')).toHaveValue('new value');
    expect(onChange).toHaveBeenCalledWith('new value');
  });

  it('renders the input field with an icon', () => {
    render(<Input {...args} icon={<p>look at me, im the icon now</p>} />);

    expect(screen.getByRole('presentation')).toBeInTheDocument();
  });
});
