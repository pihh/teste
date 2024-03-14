export const textColors = {
  primary: "#000000",
  secondary: "#0F0F0F90",
  contrast: "#FFFFFF",
  error: "#E52B67",
  info: "#007AFF",
  danger: "#FF0000",
  warning: "#EEA63A",
  success: "#4DCFC0",
  neutral: "#4B92D4",
};
export const bgColors = {
  primary: "#FFFFFF",
  secondary: "#e5e5f5",
  light: "#F2F2F2",
  contrast: "#9B40BF",
  error: "#E52B67",
  danger: "#FF0000",
  warning: "#EEA63A",
  success: "#4DCFC0",
  neutral: "#4B92D4",

  // contrastLinearBackground:"linear-gradient(45deg, #9b40bf 0%,#f344f7 100%)"
};
export const bgTextColors = {
  error: textColors.contrast,
  warning: textColors.contrast,
  success: textColors.contrast,
  neutral: textColors.primary,
  light: textColors.primary,
  gradient: textColors.contrast,

  // contrastLinearBackground:"linear-gradient(45deg, #9b40bf 0%,#f344f7 100%)"
};
export const gradients = {
  brand: {
    from: "#9B40BF",
    to: "#F344F7",
    deg: "45deg",
  },
};
const borderColor= "#7A7A7A30"
const colors = {
  text: {
    ...textColors,
  },
  background: {
    ...bgColors,
  },
  backgroundText: {
    ...bgTextColors,
  },

  border: {
    all: {
      borderColor: borderColor,
      borderWidth: 1,
    },
    top: {
      borderTopColor: borderColor,
      borderTopWidth: 1,
    },
  },

  gradients: {
    ...gradients,
  },
  error: "#E52B67",
  danger: "#FF0000",
  warning: "#EEA63A",
  success: "#4DCFC0",
  neutral: "#4B92D4",
};

export default colors;
