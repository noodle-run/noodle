import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button atom', () => {
  it('renders the children', () => {
    render(<Button>Hello World</Button>);

    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });

  it('renders the icon', () => {
    render(<Button icon={<p>im the icon</p>}>Hello World</Button>);

    expect(screen.getByText(/im the icon/i)).toBeInTheDocument();
  });

  it('emits onClick handler when the button is clicked', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Hello World</Button>);

    fireEvent.click(screen.getByRole('button'));

    expect(onClick).toHaveBeenCalled();
  });

  it('renders the button with the button type by default', () => {
    render(<Button type={undefined}>Hello World</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('renders the button with the value of the type prop', () => {
    render(<Button type="submit">Submit</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });
});
