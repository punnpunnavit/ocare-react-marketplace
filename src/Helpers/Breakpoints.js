const size = {
  xs: "600px",
  sm: "600px",
  md:"768px",
  lg: "992px",
  xl: "1200px",
};
const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.sm})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`
};
export default { size, device };
