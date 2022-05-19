import { render } from '@testing-library/react';
import React from 'react';
import Home from '../pages/index';

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Home />);
    expect(baseElement).toBeTruthy();
  });

  it('should render hello world', () => {
    const { getByText } = render(<Home />);
    expect(getByText(/hello world/i)).toBeTruthy();
  });
});
