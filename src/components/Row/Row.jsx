import { View, Image, Text, StyleSheet, ImageBackground } from "react-native";
import ProjectTheme from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import { RowSmall, RowSubTitle, RowTitle } from "../Typography/Typography";

const ContentRowImageGroup = function ({
  src = ProjectTheme.placeholders.thumbnail,
  overlay = false,
  blur = false,
}) {
    const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
  return (
    <View style={styles.imageGroup}>
      <ImageBackground source={src} style={styles.imageGroupImage} resizeMode="cover"/>
    </View>
  );
};
// export const ContentRowHeader = function ({ children }) {
//   return (
//     <View style={[styles.host, styles.section]}>
//       <H5 style={styles.content}>{children}</H5>
//       <View >
//         <Image source={ArrowRight} />
//       </View>
//     </View>
//   );
// };

export const ContentRowHeadline = ({ children }) => (
  <View className="headline">{children}</View>
);
export const ContentRowBody = ({ children }) => (
  <View className="body">{children}</View>
);
export const ContentRowNote = ({ children }) => (
  <View className="note">{children}</View>
);
export const ContentRow = function ({
  children,
  icon = false,
  thumbnail = false,
  onPress,
}) {
  let Headline = <View></View>;
  let Body = <View></View>;
  let Note = <View></View>;
  let Main = children;

  
  if (children.filter) {
    Main = children.filter((child) => {
      const childType = child?.type?.name;
      if (childType === "ContentRowHeadline") {
        Headline = (<RowTitle>{child}</RowTitle>);
        return false;
      } else if (childType === "ContentRowBody") {
        Body = (<RowSubTitle>{child}</RowSubTitle>);
        return false;
      } else if (childType === "ContentRowNote") {
        Note = (<RowSmall>{child}</RowSmall>)
        return false;
      } else {
        return true;
      }
    });
    if(Main.length == 0){
        Main = <Text></Text>
    }
  } 

  return (
    <View style={styles.host} onPress={onPress}>
      {thumbnail ? (
        <View>
          <ContentRowImageGroup />
        </View>
      ) : (
        <View></View>
      )}

      <View style={styles.content}>
        {Headline}
        {Body}
        {Note}
        {Main}
      </View>
      {icon ? (
        <View>
          <AntDesign name={icon} size={16} />
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  host: {
    ...ProjectTheme.position.flexRowCenter,
    ...ProjectTheme.padding.item,
    // ...ProjectTheme.margin.item,
    ...ProjectTheme.colors.border.top,
    ...ProjectTheme.gap.grid.md,
    backgroundColor: ProjectTheme.colors.background.primary,
    minHeight: 60,
  },
  section: {
    height: 60,
  },
  content: {
    flex: 1,
  },
  imageGroup: {
    height: 72,
    width: 72,
    borderRadius: 8,
    overflow: "hidden",
  },
  imageGroupImage: {
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: 'center',
  },
});
