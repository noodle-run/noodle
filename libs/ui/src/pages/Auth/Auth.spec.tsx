import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Auth } from './Auth';

describe('Auth page', () => {
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
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
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
    const inputElement = screen.getByPlaceholderText('Enter your email');

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      await userEvent.type(inputElement, email);
    });

    const loginButton = screen.getByText('Let me in!');

    await userEvent.click(loginButton);

    expect(onMagicLinkLogin).toHaveBeenCalledWith(email);
  });
});
