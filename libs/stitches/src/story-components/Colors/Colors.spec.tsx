import { render, screen } from '@testing-library/react';
import { lightGroups } from '../../colors/light';
import { Colors } from './Colors';

describe('Colors Story Component', () => {
  it.each(lightGroups)('returns the %s color group', (group) => {
    render(<Colors />);

    expect(
      screen.getByText(group[0].toUpperCase() + group.slice(1)),
    ).toBeInTheDocument();
  });
});
