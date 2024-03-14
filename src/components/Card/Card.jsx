import { ImageBackground } from "react-native";
import ProjectTheme from "../../constants/theme";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CardBody, CardSmall, CardTitle } from "../Typography/Typography";
export const CardFooter = ({ children }) => (
  <View>
    <Text>{children}</Text>
  </View>
);
export const VerticalCard = function ({
  children,
  title,
  info,
  //   thumbnail = { uri: "https://legacy.reactjs.org/logo-og.png" },
  thumbnail = ProjectTheme.placeholders.thumbnail,
  rating = false,
  isContentRow = true,
}) {
  let contentRow = {};
  if (isContentRow) {
    contentRow = {
      borderColor: "#7A7A7A",
      borderTopColor: "#7A7A7A30",
      borderTopWidth: 1,
    };
  }
  let Title = <Text></Text>;
  let Subtitle = <Text></Text>;
  let Content = <Text></Text>;
  let Footer = <Text></Text>;
  let Main = children;
  
  if (children && children.filter) {
    Main = children.filter((child) => {
      const childType = child?.type?.name.replace("Row", "Card");
      if (childType === "CardTitle") {
        Title = <CardTitle style={styles.verticalCardTitle}>{child}</CardTitle>;
        return false;
      } else if (childType === "CardSmall") {
        Subtitle = <CardSmall color="secondary">{child}</CardSmall>;
        return false;
      } else if (childType === "CardBody") {
        Content = (
          <View style={{ marginTop: 8, marginBottom: 4}}>
            {child}
          </View>
        );

        return false;
      } else if (childType === "CardFooter") {
        Footer = <View style={styles.verticalImageInfoFooter}>{child}</View>;
        return false;
      }
      return true;
    });
  }

  return (
    <View style={[styles.root, contentRow]}>
      <View style={styles.imageContainer}>
        <View
          style={{
            display: "flex",
            flex: 1,
          }}
        >
          <ImageBackground
            source={thumbnail}
            resizeMode="cover"
            style={{
              height: "inherit",
              display: "contents",
              width: "inherit",
            }}
          ></ImageBackground>
        </View>
      </View>
      <View style={styles.storyContainer}>
        <View style={styles.verticalImageInfoBody}>
          {Title}
          {Subtitle}
          {Content}
        </View>
        {Footer}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",

    ...ProjectTheme.padding.item,
    backgroundColor: ProjectTheme.colors.background.primary,
    gap: ProjectTheme.gap.grid.md,
    maxHeight: "50vh",
    borderTopWidth: 1,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  imageContainer: {
    borderRadius: 12,
    overflow: "hidden",
    width: "10rem",
    height: "100%",
    position: "relative",
    minWidth: "35%",
  },
  storyContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    minHeight: "50vw",
    paddingTop: 4,
    paddingBottom: 4,
  },
});
