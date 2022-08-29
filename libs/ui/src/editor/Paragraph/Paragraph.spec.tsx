import { render, screen } from '@testing-library/react';
import { Plate } from '@udecode/plate-core';
import { Paragraph } from './Paragraph';

describe('Paragraph element', () => {
  it('should render children', () => {
    render(
      <Plate>
        <Paragraph>Paragraph</Paragraph>
      </Plate>,
    );

    expect(screen.getByText(/paragraph/i)).toBeInTheDocument();
  });
});
