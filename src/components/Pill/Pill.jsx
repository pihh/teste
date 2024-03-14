import { Pressable, StyleSheet, View } from "react-native";
import ProjectTheme from "../../constants/theme";
import { SmallBold } from "../Typography/Typography";
import { ButtonWrapper } from "../Button/Button";
export const PillRight = ({children})=>{

}
export const Pill = ({ children, onPress, active = false, color = false }) => {
  let backgroundColor = {};
  let buttonWidth = { width: ProjectTheme.width.fit };
  let buttonHeight = { height: ProjectTheme.height.pill };
  // let buttonHeight = { height: ProjectTheme.height.button[height] };
  let buttonTextSize = 14;
  let textColorKey = active ? "contrast" : color? color:"primary";

  let textColor = {
     color: ProjectTheme.text["primary"].textColors[textColorKey],
   };

  if (color === "gradient" || active) {
  } else {
    backgroundColor = {
      backgroundColor: ProjectTheme.colors.background[textColorKey],
    };
  }
 

  return (
    <ButtonWrapper
      styles={[
        styles.root,
        backgroundColor,
        buttonWidth,
        buttonHeight,
        textColor,

        { fontSize: buttonTextSize },
      ]}
      gradient={active}
    >
      <Pressable onPress={onPress}>
        <View style={styles.primary}>
          <SmallBold color={textColorKey}>{children}</SmallBold>
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
    marginLeft:0,
    marginRight:0,
    marginTop:8,
  },
  text: {},
  left: {},
  right: {},
  primary: {
    flex: 1,
  },
});
