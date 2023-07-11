import { render, screen, waitFor } from '@noodle/test-utils/renderer';

import { Avatar, AvatarFallback, AvatarImage } from '.';

declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window {
    Image: typeof Image;
  }
}

class MockImage extends Image {
  override set onload(value: (() => void) | null) {
    super.onload = value;
  }

  override set src(value: string) {
    super.src = value;
    if (this.onload) {
      this.onload();
    }
  }
}

describe('Avatar', () => {
  let originalImage: typeof Image;

  beforeAll(() => {
    // Save the original Image object
    originalImage = window.Image;

    // Assign the mock Image
    window.Image = MockImage as unknown as typeof Image;
  });

  afterAll(() => {
    // Restore the original Image object after all tests in this block are done
    window.Image = originalImage;
  });

  it('should render the image', async () => {
    render(
      <Avatar>
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/20271968?v=4"
          alt="@ixahmedxi"
        />
      </Avatar>,
    );

    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://avatars.githubusercontent.com/u/20271968?v=4',
    );
  });

  it('should render the fallback', () => {
    render(
      <Avatar>
        <AvatarFallback>AE</AvatarFallback>
      </Avatar>,
    );

    expect(screen.getByText('AE')).toBeInTheDocument();
  });
});
