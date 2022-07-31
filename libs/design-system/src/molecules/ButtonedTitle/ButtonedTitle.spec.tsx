import { render, screen } from '@testing-library/react';
import { ButtonedTitle } from './ButtonedTitle';

describe('ButtonedTitle Molecule', () => {
  const title = 'Rethinking student productivity.';
  const subtitle =
    'Noodle is an open source student productivity platform developed out of frustrations with current tools supplied by universities, free for all and can be self hosted!';

  it('renders the Title text', () => {
    render(<ButtonedTitle title={title} />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('renders the Subtitle text', () => {
    render(<ButtonedTitle title="temp" subtitle={subtitle} />);

    expect(screen.getByText(subtitle)).toBeInTheDocument();
  });
});
