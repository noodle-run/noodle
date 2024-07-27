export const convertHexToRGBA = (hexCode: string, opacity = 1) => {
  let hex = hexCode.replace('#', '');

  if (hex.length === 3) {
    const first = hex[0] ?? '';
    const second = hex[1] ?? '';
    const third = hex[2] ?? '';

    hex = `${first}${first}${second}${second}${third}${third}`;
  }

  const r = parseInt(hex.substring(0, 2), 16).toString();
  const g = parseInt(hex.substring(2, 4), 16).toString();
  const b = parseInt(hex.substring(4, 6), 16).toString();

  if (opacity > 1 && opacity <= 100) {
    opacity = opacity / 100;
  }

  return `rgba(${r},${g},${b},${opacity.toString()})`;
};

export function getTextColor(hexColor: string): string {
  // Remove the '#' symbol if it's included
  hexColor = hexColor.replace(/^#/, '');

  // Parse the hex color code to RGB values
  const r = parseInt(hexColor.slice(0, 2), 16);
  const g = parseInt(hexColor.slice(2, 4), 16);
  const b = parseInt(hexColor.slice(4, 6), 16);

  // Calculate the perceived brightness using the relative luminance formula
  const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Determine the text color based on brightness
  return brightness > 0.5 ? 'black' : 'white';
}
