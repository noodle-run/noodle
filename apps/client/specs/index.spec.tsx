import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from '../pages/index';

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Home />);
    expect(baseElement).toBeInTheDocument();
  });

  it('should render hello world', () => {
    render(<Home />);
    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });
});
