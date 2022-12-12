import { render, screen } from '@testing-library/react';
import { LoadingScreen } from './LoadingScreen';

describe('Loading screen template', () => {
  it('renders the loading animation', () => {
    render(<LoadingScreen />);

    expect(screen.getByTitle(/loading animation/i)).toBeInTheDocument();
  });
});
