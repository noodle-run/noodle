import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Auth } from './Auth';

describe('Auth page', () => {
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

  it('should render welcome message', () => {
    render(
      <Auth
        onGithubLogin={jest.fn()}
        onGoogleLogin={jest.fn()}
        onMagicLinkLogin={jest.fn()}
      />,
    );
    expect(screen.getByText('Welcome to Noodle!')).toBeInTheDocument();
  });

  it('should render email input', () => {
    render(
      <Auth
        onGithubLogin={jest.fn()}
        onGoogleLogin={jest.fn()}
        onMagicLinkLogin={jest.fn()}
      />,
    );
    expect(screen.getByTestId('input-atom')).toBeInTheDocument();
  });

  it('should render login button', () => {
    render(
      <Auth
        onGithubLogin={jest.fn()}
        onGoogleLogin={jest.fn()}
        onMagicLinkLogin={jest.fn()}
      />,
    );
    expect(screen.getByText('Let me in!')).toBeInTheDocument();
  });

  it('should render github login button', () => {
    render(
      <Auth
        onGithubLogin={jest.fn()}
        onGoogleLogin={jest.fn()}
        onMagicLinkLogin={jest.fn()}
      />,
    );
    expect(screen.getByText('Continue with Github')).toBeInTheDocument();
  });

  it('should render google login button', () => {
    render(
      <Auth
        onGithubLogin={jest.fn()}
        onGoogleLogin={jest.fn()}
        onMagicLinkLogin={jest.fn()}
      />,
    );
    expect(screen.getByText('Continue with Google')).toBeInTheDocument();
  });

  it('should call onMagicLinkLogin with current email', async () => {
    const onMagicLinkLogin = jest.fn();
    render(
      <Auth
        onGithubLogin={jest.fn()}
        onGoogleLogin={jest.fn()}
        onMagicLinkLogin={onMagicLinkLogin}
      />,
    );
    const email = 'johndoe123@gmail.com';
    const inputElement = screen.getByTestId('input-atom');

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      await userEvent.type(inputElement, email);
    });

    const loginButton = screen.getByText('Let me in!');

    await userEvent.click(loginButton);

    expect(onMagicLinkLogin).toHaveBeenCalledWith(email);
  });

  it('should render authentication denied on error', () => {
    render(
      <Auth
        onGithubLogin={jest.fn()}
        onGoogleLogin={jest.fn()}
        onMagicLinkLogin={jest.fn()}
        error="Not approved"
      />,
    );

    expect(screen.getByText('Authentication denied')).toBeInTheDocument();
  });

  it('closes the modal when clicking on the close button', async () => {
    render(
      <Auth
        onGithubLogin={jest.fn()}
        onGoogleLogin={jest.fn()}
        onMagicLinkLogin={jest.fn()}
        error="Not approved"
      />,
    );

    const closeButton = screen.getByTestId('close-modal');

    await act(async () => {
      await userEvent.click(closeButton);
    });

    expect(screen.queryByText('Authentication denied')).not.toBeInTheDocument();
  });
});
