import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button atom', () => {
  it('should render children', () => {
    render(<Button>Button</Button>);

    expect(screen.getByText('Button')).toBeInTheDocument();
  });

  it('should render icon', () => {
    render(<Button icon={<div>Icon</div>}>Button</Button>);

    expect(screen.getByText('Icon')).toBeInTheDocument();
  });
});
