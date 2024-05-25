'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

/**
 * This component renders the dashboard preview image that is used on the home
 * marketing page, it will use the light or dark image depending on the theme.
 * @returns A react component representing the dashboard preview image.
 */
export function HomePreview() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted && resolvedTheme === 'light') {
    return (
      <>
        <Image
          src="/_static/light-dashboard-preview.jpg"
          width={1920}
          height={1080}
          alt="Dashboard Preview"
          className="my-12 rounded-lg shadow-[0_50px_200px_75px] shadow-pink/10"
        />
      </>
    );
  }

  return (
    <Image
      src="/_static/dark-dashboard-preview.jpg"
      width={1920}
      height={1080}
      alt="Dashboard Preview"
      className="my-12 rounded-lg shadow-[0_50px_200px_75px] shadow-pink/10"
    />
  );
}
