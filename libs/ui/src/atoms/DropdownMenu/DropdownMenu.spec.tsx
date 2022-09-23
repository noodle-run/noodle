import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DropdownMenu } from './DropdownMenu';

describe('Dropdown menu atom', () => {
  it('renders the trigger', () => {
    render(
      <DropdownMenu
        trigger={<button>Click me</button>}
        list={[{ href: '/', label: 'Home', icon: <p>home icon</p> }]}
      />,
    );

    expect(screen.getByText(/click me/i)).toBeInTheDocument();
  });

  it('renders the list', async () => {
    render(
      <DropdownMenu
        trigger={<button>Click me</button>}
        list={[{ href: '/', label: 'Home', icon: <p>home icon</p> }]}
      />,
    );

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      await userEvent.click(screen.getByRole('button', { name: 'Click me' }));
    });

    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
