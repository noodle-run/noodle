import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button atom', () => {
  it('renders the children', () => {
    render(<Button>Hello World</Button>);

    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });
});
