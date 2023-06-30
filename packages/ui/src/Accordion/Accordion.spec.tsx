import userEvent from '@testing-library/user-event';

import { render, screen } from '@noodle/test-utils/renderer';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '.';

describe('Accordion', () => {
  it('should render accordion item trigger', () => {
    render(
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    expect(screen.getByText('Is it accessible?')).toBeInTheDocument();
  });

  it('should render accordion item content', async () => {
    render(
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    const trigger = screen.getByText('Is it accessible?');

    expect(
      screen.queryByText('Yes. It adheres to the WAI-ARIA design pattern.'),
    ).not.toBeInTheDocument();

    await userEvent.click(trigger);

    expect(
      screen.getByText('Yes. It adheres to the WAI-ARIA design pattern.'),
    ).toBeInTheDocument();
  });
});
