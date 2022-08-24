import { render, screen } from '@testing-library/react';
import { Paragraph } from './Paragraph';

describe('Paragraph element', () => {
  it('should render children', () => {
    render(<Paragraph>Paragraph</Paragraph>);

    expect(screen.getByText(/paragraph/i)).toBeInTheDocument();
  });
});
