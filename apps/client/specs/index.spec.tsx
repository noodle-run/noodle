import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import { Wrapper } from '../utils/setupTests';

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Wrapper>
        <Home />
      </Wrapper>,
    );
    expect(baseElement).toBeInTheDocument();
  });

  it('should render hello world', () => {
    render(
      <Wrapper>
        <Home />
      </Wrapper>,
    );
    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });
});
