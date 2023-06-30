import { Terminal } from 'lucide-react';

import { render, screen } from '@noodle/test-utils/renderer';

import { Alert, AlertDescription, AlertTitle } from '.';

describe('Alert component', () => {
  it('should render the title and description', () => {
    render(
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          Something important that I want to tell you
        </AlertDescription>
      </Alert>,
    );

    expect(screen.getByText('Heads up!')).toBeInTheDocument();
    expect(
      screen.getByText('Something important that I want to tell you'),
    ).toBeInTheDocument();
  });
});
