import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StarButton } from './StarButton';

describe('StarButton atom', () => {
  it('renders a normal button when not starred', () => {
    render(<StarButton isStarred={false} />);

    const icon = screen.getByTestId('favourite-icon');
    expect(icon).toHaveClass('text-gray-500');
  });

  it('renders a starred button when starred', () => {
    render(<StarButton isStarred />);

    const icon = screen.getByTestId('favourite-icon');
    expect(icon).toHaveClass('text-amber-400');
  });

  it('calls the onChange handler when clicked', async () => {
    const onChange = jest.fn();
    render(<StarButton isStarred={false} onChange={onChange} />);
    const button = screen.getByRole('button');

    await act(async () => {
      await userEvent.click(button);
    });

    expect(onChange).toHaveBeenCalledWith(true);
  });
});
