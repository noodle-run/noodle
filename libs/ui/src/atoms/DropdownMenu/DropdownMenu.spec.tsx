import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DropdownMenu } from './DropdownMenu';

describe('Dropdown menu atom', () => {
  it('renders the trigger', () => {
    render(
      <DropdownMenu
        list={[{ href: '/', label: 'Home', icon: <p>home icon</p> }]}
      >
        Click me
      </DropdownMenu>,
    );

    expect(screen.getByText(/click me/i)).toBeInTheDocument();
  });

  it('triggers list item on click', async () => {
    const listItemOnClick = jest.fn();
    render(
      <DropdownMenu
        list={[
          { onClick: listItemOnClick, label: 'Sign out', icon: <>icon</> },
        ]}
      >
        Click me
      </DropdownMenu>,
    );

    await act(async () => {
      await userEvent.click(screen.getByRole('button', { name: 'Click me' }));
    });

    await act(async () => {
      await userEvent.click(screen.getByText('Sign out'));
    });

    expect(listItemOnClick).toHaveBeenCalledTimes(1);
  });

  it('renders the list', async () => {
    render(
      <DropdownMenu
        list={[{ href: '/', label: 'Home', icon: <p>home icon</p> }]}
      >
        Click me
      </DropdownMenu>,
    );

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      await userEvent.click(screen.getByRole('button', { name: 'Click me' }));
    });

    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
