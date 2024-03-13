import ProjectTheme from "../../constants/theme";
import { LinearGradient } from "expo-linear-gradient";
export const GradientWrapper = function ({ children, style = {} }) {
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={[
        ProjectTheme.colors.gradients.brand.from,
        ProjectTheme.colors.gradients.brand.to,
      ]}
      start={{ x: 0, y: 0.2 }}
      end={{ x: 0.7, y: 1 }}
      style={style}
    >
      {children}
    </LinearGradient>
  );
};
