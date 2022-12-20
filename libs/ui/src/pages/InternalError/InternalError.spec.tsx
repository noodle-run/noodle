import { render, screen } from '@testing-library/react';
import { InternalError } from './InternalError';

describe('Internal error page', () => {
  it('renders the message', () => {
    render(<InternalError message="Some error here" />);

    expect(screen.getByText('Some error here')).toBeInTheDocument();
  });
});
