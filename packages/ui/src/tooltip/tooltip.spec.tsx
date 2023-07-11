import userEvent from '@testing-library/user-event';

import { render, screen } from '@noodle/test-utils/renderer';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '.';

describe('Tooltip', () => {
  it('should render the tooltip content', async () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Trigger Tooltip</TooltipTrigger>
          <TooltipContent>
            <p className="max-w-[40ch] text-center">
              You can invoke the bold styling by clicking on this button or
              using the CMD + B keyboard shortcut.
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    );

    await userEvent.hover(
      screen.getByRole('button', { name: /trigger tooltip/i }),
    );

    const all = await screen.findAllByText(/invoke the bold styling/i);

    // IDK why but it renders twice
    expect(all).toHaveLength(2);
  });
});
