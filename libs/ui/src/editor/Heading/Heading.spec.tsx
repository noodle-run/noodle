import { render, screen } from '@testing-library/react';
import { Plate } from '@udecode/plate-core';
import { Heading } from './Heading';

describe('Heading component', () => {
  it('should render children', () => {
    render(
      <Plate>
        <Heading>Heading</Heading>
      </Plate>,
    );

    expect(screen.getByText(/heading/i)).toBeInTheDocument();
  });
});
