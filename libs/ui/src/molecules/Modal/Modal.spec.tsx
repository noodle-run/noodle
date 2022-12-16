import { render, screen } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal molecule', () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  it("doesn't render title when closed", () => {
    render(
      <Modal title="Title" description="Description" onClose={() => {}} />,
    );

    expect(screen.queryByText('Title')).not.toBeInTheDocument();
  });

  it('renders the title when open', () => {
    render(
      <Modal title="Title" description="Description" open onClose={() => {}} />,
    );

    expect(screen.getByText('Title')).toBeInTheDocument();
  });

  it('renders the description when open', () => {
    render(
      <Modal title="Title" description="Description" open onClose={() => {}} />,
    );

    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  it('renders the image when open', () => {
    render(
      <Modal
        title="Title"
        description="Description"
        image="/image.png"
        alt="illustration"
        open
        onClose={() => {}}
      />,
    );

    expect(screen.getByAltText('illustration')).toBeInTheDocument();
  });
});
