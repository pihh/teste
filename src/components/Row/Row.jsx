import { View, Image, Text, StyleSheet, ImageBackground } from "react-native";
import ProjectTheme from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import { RowSmall, RowSubTitle, RowTitle } from "../Typography/Typography";

const ContentRowImageGroup = function ({
  source = ProjectTheme.placeholders.thumbnail,
  overlay = false,
  blur = false,
}) {
  const blurRadius = blur ? 4:  0
  return (
    <View style={styles.imageGroup}>
      <ImageBackground
        source={source}
        style={styles.imageGroupImage}
        resizeMode="cover"
        blurRadius={blurRadius}
      />
      {overlay ? <View style={styles.imageGroupOverlay} /> : <></>}
      {blur ? <View style={styles.imageGroupBlur} /> : <></>}
    </View>
  );
};


export const ContentRowHeadline = ({ children,color="primary" }) => (
  <RowTitle className="headline" color={color}>{children}</RowTitle>
);
export const ContentRowBody = ({ children ,color="primary"}) => (
  <RowSubTitle className="body" color={color}>{children}</RowSubTitle>
);
export const ContentRowNote = ({ children,color="secondary" }) => (
  <RowSmall className="note" color={color}>{children}</RowSmall>
);
export const ContentRowRight = ({ children }) => (
  <View className="right">{children}</View>
);
export const ContentRow = function ({
  children,
  height=false,
  overlay=false,
  blur=false,
  thumbnail = false,
  padding=false,
  onPress,
}) {
  let Headline = <Text></Text>;
  let Body = <Text></Text>;
  let Note = <Text></Text>;
  let Main = children;
  let Right = <View></View>;

  let propPadding = {}
  if(!padding){
    propPadding={
      paddingLeft: 0,
      paddingRight: 0,
    }
  }
  if (children.filter) {
    Main = children.filter((child) => {
      const childType = child?.type?.name;
      if (childType === "ContentRowHeadline") {
        Headline = <RowTitle>{child}</RowTitle>;
        return false;
      } else if (childType === "ContentRowBody") {
        Body = <RowSubTitle>{child}</RowSubTitle>;
        return false;
      } else if (childType === "ContentRowNote") {
        Note = <RowSmall>{child}</RowSmall>;
        return false;
      } else if (childType === "ContentRowRight") {
        Right = <View>{child}</View>;
        return false;
      } else {
        return true;
      }
    });
  
  }else{
    Body = <RowSubTitle>{children}</RowSubTitle>
  }
  let propHeight = {}
  if(height ==="full"){
    propHeight= {height:"100%"}
  }

  return (
    <View style={[styles.host,propHeight,propPadding]} onPress={onPress}>
      {thumbnail ? (
        <View>
          <ContentRowImageGroup source={thumbnail} overlay={overlay} blur={blur} />
        </View>
      ) : (
        <View></View>
      )}

      <View style={styles.content}>
        {Headline}
        {Body}
        {Note}
      </View>
      {Right}
    </View>
  );
};

const styles = StyleSheet.create({
  host: {
    ...ProjectTheme.position.flexRowCenter,
    ...ProjectTheme.padding.item,
    ...ProjectTheme.colors.border.top,
    gap: ProjectTheme.gap.grid.md,
    backgroundColor: ProjectTheme.colors.background.primary,
    minHeight: 60,
  },
  section: {
    height: 72,
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
    justifyContent: "center",
  },
  imageGroupOverlay: {
    height: "100%",
    width: "100%",
    zIndex: 2,
    position: "absolute",
    top: 0,
    left: 0,
  },
  imageGroupBlur: {
    height: "100%",
    width: "100%",
    zIndex: 2,
    position: "absolute",
    top: 0,
    left: 0,
    
  },
});
