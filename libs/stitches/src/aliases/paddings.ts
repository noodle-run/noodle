export const paddings = {
  p: (value: string) => ({
    padding: value,
  }),
  px: (value: string) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: string) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  pt: (value: string) => ({
    paddingTop: value,
  }),
  pb: (value: string) => ({
    paddingBottom: value,
  }),
};
