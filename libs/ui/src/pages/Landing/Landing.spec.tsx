import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Landing } from './Landing';

describe('Landing page', () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  it('renders the heading', () => {
    const onWaitListFormSubmit = jest.fn();
    render(<Landing onWaitListFormSubmit={onWaitListFormSubmit} />);

    expect(
      screen.getByText(/rethinking student productivity/i),
    ).toBeInTheDocument();
  });

  it('renders error message when email is not valid', async () => {
    const onWaitListFormSubmit = jest.fn();
    render(<Landing onWaitListFormSubmit={onWaitListFormSubmit} />);

    const submitButton = screen.getByRole('button', { name: /join waitlist/i });

    await act(async () => {
      await userEvent.click(submitButton);
    });

    expect(
      screen.getByText(/please enter a valid email address/i),
    ).toBeInTheDocument();
  });

  it('shows the modal when the form is submitted', async () => {
    const onWaitListFormSubmit = jest.fn().mockResolvedValue('');
    render(<Landing onWaitListFormSubmit={onWaitListFormSubmit} />);

    const submitButton = screen.getByRole('button', { name: /join waitlist/i });
    const emailInput = screen.getByPlaceholderText(/email address/i);

    await act(async () => {
      await userEvent.type(emailInput, 'johndoe@gmail.com');
    });

    await act(async () => {
      await userEvent.click(submitButton);
    });

    expect(screen.getByText("You're on the waiting list!")).toBeInTheDocument();

    expect(onWaitListFormSubmit).toHaveBeenCalledWith('johndoe@gmail.com');
  });

  it('shows the error message when the form is submitted', async () => {
    const onWaitListFormSubmit = jest
      .fn()
      .mockRejectedValue(new Error('Something went wrong. Please try again.'));
    render(<Landing onWaitListFormSubmit={onWaitListFormSubmit} />);

    const submitButton = screen.getByRole('button', { name: /join waitlist/i });
    const emailInput = screen.getByPlaceholderText(/email address/i);

    const email = 'johndoe@gmail.com';

    await act(async () => {
      await userEvent.type(emailInput, email);
    });

    await act(async () => {
      await userEvent.click(submitButton);
    });

    expect(
      screen.getByText('Something went wrong. Please try again.'),
    ).toBeInTheDocument();
  });

  it('closes the modal when the close button is pressed', async () => {
    const onWaitListFormSubmit = jest.fn().mockResolvedValue('');
    render(<Landing onWaitListFormSubmit={onWaitListFormSubmit} />);

    const submitButton = screen.getByRole('button', { name: /join waitlist/i });
    const emailInput = screen.getByPlaceholderText(/email address/i);

    const email = 'johndoe@gmail.com';

    await act(async () => {
      await userEvent.type(emailInput, email);
    });

    await act(async () => {
      await userEvent.click(submitButton);
    });

    const closeButton = screen.getByTestId('close-modal');

    await act(async () => {
      await userEvent.click(closeButton);
    });

    expect(
      screen.queryByText("You're on the waiting list!"),
    ).not.toBeInTheDocument();
  });
});
