export const margins = {
  m: (value: string | number) => ({
    margin: value,
  }),
  mx: (value: string | number) => ({
    marginRight: value,
    marginLeft: value,
  }),
  my: (value: string | number) => ({
    marginTop: value,
    marginBottom: value,
  }),
  mt: (value: string | number) => ({
    marginTop: value,
  }),
  mb: (value: string | number) => ({
    marginBottom: value,
  }),
};
