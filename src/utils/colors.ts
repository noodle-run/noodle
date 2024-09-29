import {
  amber,
  blue,
  bronze,
  brown,
  crimson,
  cyan,
  gold,
  grass,
  gray,
  green,
  indigo,
  iris,
  jade,
  lime,
  mint,
  orange,
  pink,
  plum,
  purple,
  red,
  ruby,
  sky,
  teal,
  tomato,
  violet,
  yellow,
} from '@radix-ui/colors';

export const colorChoices = [
  {
    name: 'default',
    value: gray.gray9,
  },
  {
    name: 'tomato',
    value: tomato.tomato9,
  },
  {
    name: 'red',
    value: red.red9,
  },
  {
    name: 'ruby',
    value: ruby.ruby9,
  },
  {
    name: 'crimson',
    value: crimson.crimson9,
  },
  {
    name: 'pink',
    value: pink.pink9,
  },
  {
    name: 'plum',
    value: plum.plum9,
  },
  {
    name: 'purple',
    value: purple.purple9,
  },
  {
    name: 'violet',
    value: violet.violet9,
  },
  {
    name: 'iris',
    value: iris.iris9,
  },
  {
    name: 'indigo',
    value: indigo.indigo9,
  },
  {
    name: 'blue',
    value: blue.blue9,
  },
  {
    name: 'cyan',
    value: cyan.cyan9,
  },
  {
    name: 'teal',
    value: teal.teal9,
  },
  {
    name: 'jade',
    value: jade.jade9,
  },
  {
    name: 'green',
    value: green.green9,
  },
  {
    name: 'grass',
    value: grass.grass9,
  },
  {
    name: 'bronze',
    value: bronze.bronze9,
  },
  {
    name: 'gold',
    value: gold.gold9,
  },
  {
    name: 'brown',
    value: brown.brown9,
  },
  {
    name: 'orange',
    value: orange.orange9,
  },
  {
    name: 'amber',
    value: amber.amber9,
  },
  {
    name: 'yellow',
    value: yellow.yellow9,
  },
  {
    name: 'lime',
    value: lime.lime9,
  },
  {
    name: 'mint',
    value: mint.mint9,
  },
  {
    name: 'sky',
    value: sky.sky9,
  },
];

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
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  const color = luminance > 0.5 ? '#000000' : '#FFFFFF';

  return color;
}

export function getColorForUsername(
  username: string,
  colors = colorChoices.map((c) => c.value).filter((c) => c !== gray.gray9),
) {
  let hash = 0;
  for (let i = 0; i < username.length; i++) {
    const char = username.charCodeAt(i);
    hash = ((hash << 5) - hash + char) | 0;
  }
  const colorIndex = Math.abs(hash) % colors.length;
  // eslint-disable-next-line security/detect-object-injection
  const backgroundColor = colors[colorIndex] ?? gray.gray9;

  return {
    backgroundColor,
    color: getTextColor(backgroundColor),
  };
}
