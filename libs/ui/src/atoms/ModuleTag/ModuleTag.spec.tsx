import { render, screen } from '@testing-library/react';
import { ModuleTag } from './ModuleTag';

describe('Module tag atom', () => {
  it('should render the module name', () => {
    render(<ModuleTag name="Artificial Intelligence" color="rose" />);

    expect(screen.getByText(/artificial intelligence/i)).toBeInTheDocument();
  });

  it('renders with the correct color', () => {
    render(<ModuleTag name="Artificial Intelligence" color="rose" />);

    expect(screen.getByText(/artificial intelligence/i)).toHaveClass(
      'bg-rose-400',
    );
  });
});
