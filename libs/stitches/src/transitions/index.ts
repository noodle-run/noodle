export const easing = 'cubic-bezier(0.4, 0, 0.2, 1)';
export const timing = '150ms';

const colors = `color ${easing} ${timing}, background-color ${easing} ${timing}, border-color ${easing} ${timing}, text-decoration-color ${easing} ${timing}, fill ${easing} ${timing}, stroke ${easing} ${timing}`;

export const transitions = {
  all: `all ${easing} ${timing}`,
  default: `${colors}, opacity ${easing} ${timing}, box-shadow ${easing} ${timing}, transform ${easing} ${timing}, filter ${easing} ${timing}, backdrop-filter ${easing} ${timing}`,
  colors,
  opacity: `opacity ${easing} ${timing}`,
  shadow: `box-shadow ${easing} ${timing}`,
  transform: `transform ${easing} ${timing}`,
};
