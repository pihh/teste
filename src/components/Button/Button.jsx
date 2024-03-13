import {
  Text,
  Pressable,
  StyleSheet,
  View,
  ActivityIndicator,
} from "react-native";
import ProjectTheme from "../../constants/theme";
import { B, Small, SmallBold } from "../Typography/Typography";
import { LinearGradient } from "expo-linear-gradient";
import { GradientWrapper } from "../GradientWrapper/GradientWrapper";

export const ButtonWrapper = function ({
  children,
  styles = {},
  gradient = false,
}) {
  if (gradient) {
    return <GradientWrapper style={styles}>{children}</GradientWrapper>;
  } else {
    return <View style={styles}>{children}</View>;
  }
};

export const ButtonLeft = ({ children }) => <View className="left">{children}</View>;
export const ButtonRight = ({ children }) => <View className="right">{children}</View>;
export const Button = ({
  children,
  onPressLeft,
  onPressRight,
  onPress,
  color = "light",
  height = "md",
  width = "full",
  loading = false,
}) => {
  let backgroundColor = {};
  let buttonWidth = { width: ProjectTheme.width[width] };
  let buttonHeight = { height: ProjectTheme.height.button[height] };

  let textColorKey = color === "light" ? "primary" : "contrast";
  let textColor = {
    color: ProjectTheme.text["primary"].textColors[textColorKey],
  };

  if (color === "gradient") {
  } else {
    backgroundColor = {
      backgroundColor: ProjectTheme.colors.background[color],
    };
  }
  onPress = onPress
    ? onPress
    : () => {
        alert("Press");
      };
  let Left;
  let Right;
  let Child;
  try {
    Child = children.filter((child) => {
      if (child.type.name === "ButtonLeft") {
        Left = child;
        return false;
      }

      if (child.type.name === "ButtonRight") {
        Right = child;
        return false;
      }
      return true;
    });
  } catch (e) {
    Child = children;
  }

  if (!Left) Left = <View></View>;
  if (!Right) Right = <View></View>;

  return (
    <ButtonWrapper
      styles={[
        styles.root,
        backgroundColor,
        buttonHeight,
        buttonWidth,
        textColor,
      ]}
      gradient={color === "gradient"}
    >
      <View
        style={[
          styles.left,
          textColor,
          // { color: ProjectTheme.text.textColors[color] },
        ]}
        className="left"
      >
        <Pressable onPress={onPressLeft} style={textColor}>
          {Left}
        </Pressable>
      </View>
      <View style={styles.primary}>
        {loading ? (
          <ActivityIndicator color={textColor.color} />
        ) : (
          <Pressable onPress={onPress} styles={textColor}>
            {height == "sm" ? (
              <SmallBold>{Child}</SmallBold>
            ) : (
              <B color={textColorKey}>{Child}</B>
            )}
          </Pressable>
        )}
      </View>
      <View style={[styles.right, textColor]} className="right">
        <Pressable onPress={onPressRight} style={textColor}>
          {Right}
        </Pressable>
      </View>
    </ButtonWrapper>
  );
};

const styles = StyleSheet.create({
  root: {
    gap: ProjectTheme.gap.grid.md,
    textTransform: "capitalize",
    textAlign: "center",
    ...ProjectTheme.position.flexRowCenter,
    ...ProjectTheme.padding.item,
    ...ProjectTheme.margin.item,
    ...ProjectTheme.border.button,
  },
  text: {},
  left: {},
  right: {},
  primary: {
    flex: 1,
    alignItems: "center",
  },
});
