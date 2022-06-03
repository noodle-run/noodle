# Noodle Stitches

> A Stitches CSS configuration that is based on a lot of principles from Tailwindcss like space, font sizes, radii...etc and also provides dark and light mode functionality.

## Install

Firstly you need to install the peer dependencies:

```bash
npx install-peerdeps @noodle/stitches
```

Then you install the main `@noodle/stitches` library.

```bash
# npm
npm install @noodle/stitches

# yarn
yarn add @noodle/stitches

# pnpm
pnpm install @noodle/stitches
```

## Included

- Dark/light mode functionality that is automatically initialised based on the system preferences.
- `useToggleTheme` hook to toggle between dark and light mode.
- Color palette from `@radix-ui/colors`
- Inter font family.
- Typography rules like fonts, font sizes, font weights, line heights, letter spacings from Tailwindcss.
- Border radius values from Tailwindcss.
- Space rules for margins, paddings and also sizing rules for height, width...etc
- Z indices
- Shadows
- transitions
- border widths

## Usage

Firstly import the `StitchesProvider` component and wrap your application around it.

```jsx
import { StitchesProvider } from '@noodle/stitches';

<StitchesProvider>
  <App />
</StitchesProvider>;
```

To style your components, simply import the styled function:

```jsx
import { styled } from '@noodle/stitches';

const Text = styled('p', {
  fontSize: '$2xl',
  color: '$pink10',
});
```

## License

Copyright 2022 Ahmed Elsakaan.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
