import { Pressable, StyleSheet, View } from "react-native";
import ProjectTheme from "../../constants/theme";
import { SmallBold } from "../Typography/Typography";
import { ButtonWrapper } from "../Button/Button";

export const Pill = ({
  children,

  onPress,
  active = false,
}) => {
  let backgroundColor = {};
  let buttonWidth = { width: ProjectTheme.width.fit };
  let buttonHeight = { height: ProjectTheme.height.pill };
  // let buttonHeight = { height: ProjectTheme.height.button[height] };
  let buttonTextSize = 12;
  let textColor = active ? "contrast" : "primary";

  backgroundColor = active
    ? {}
    : {
        backgroundColor: ProjectTheme.colors.background.primary,
      };

  return (
    <ButtonWrapper
      styles={[
        styles.root,
        backgroundColor,
        buttonWidth,
        buttonHeight,

        { fontSize: buttonTextSize },
      ]}
      gradient={active}
    >
      <Pressable onPress={onPress}>
        <View style={styles.primary}>
          <SmallBold color={textColor}>{children}</SmallBold>
        </View>
      </Pressable>
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
  },
});
