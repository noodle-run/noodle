export const primary = {
  foreground: "#000000",
  DEFAULT: "#F9617B",
  50: "#FEF0F3",
  100: "#FEE2E6",
  200: "#FDBFC9",
  300: "#FBA2B1",
  400: "#FA7F94",
  500: "#F9617B",
  600: "#F61D41",
  700: "#C90828",
  800: "#85051A",
  900: "#45030E",
};

export const secondaryDark = {
  background: "#FFFFFF",
  foreground: "#000000",
  DEFAULT: "#FFFFFF",
  50: "#FFFFFF",
  100: "#FFFFFF",
  200: "#FFFFFF",
  300: "#FFFFFF",
  400: "#FFFFFF",
  500: "#FFFFFF",
  600: "#E3E3E3",
  700: "#C7C7C7",
  800: "#ABABAB",
  900: "#8F8F8F",
};

export const secondaryLight = {
  background: "#000000",
  foreground: "#FFFFFF",
  DEFAULT: "#000000",
  50: "#5C5C5C",
  100: "#525252",
  200: "#3D3D3D",
  300: "#292929",
  400: "#141414",
  500: "#000000",
  600: "#000000",
  700: "#000000",
  800: "#000000",
  900: "#000000",
};

export const convertHexToRGBA = (hexCode: string, opacity = 1) => {
  let hex = hexCode.replace("#", "");

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  if (opacity > 1 && opacity <= 100) {
    opacity = opacity / 100;
  }

  return `rgba(${r},${g},${b},${opacity})`;
};

export function getTextColor(hexColor: string): string {
  // Remove the '#' symbol if it's included
  hexColor = hexColor.replace(/^#/, "");

  // Parse the hex color code to RGB values
  const r = parseInt(hexColor.slice(0, 2), 16);
  const g = parseInt(hexColor.slice(2, 4), 16);
  const b = parseInt(hexColor.slice(4, 6), 16);

  // Calculate the perceived brightness using the relative luminance formula
  const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Determine the text color based on brightness
  return brightness > 0.5 ? "black" : "white";
}
