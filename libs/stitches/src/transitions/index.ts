export const easing = 'cubic-bezier(0.4, 0, 0.2, 1)';
export const timing = '150ms';

export const transitions = {
  all: `all ${easing} ${timing}`,
  default: `color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter ${easing} ${timing}`,
  colors: `color, background-color, border-color, text-decoration-color, fill, stroke ${easing} ${timing}`,
  opacity: `opacity ${easing} ${timing}`,
  shadow: `box-shadow ${easing} ${timing}`,
  transform: `transform ${easing} ${timing}`,
};
