import {
  Header,
  LargeHeader,
  ScalingView,
  ScrollViewWithHeaders,
} from "@codeherence/react-native-header";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  HeaderBody,
  HeaderSubTitle,
  HeaderTitle,
} from "../Typography/Typography";
import {
  ContentRow,
  ContentRowHeadline,
  ContentRowNote,
  ContentRowRight,
} from "../Row/Row";
import ProjectTheme from "../../constants/theme";

const HeaderComponent = ({ showNavBar, title = "xxxxx" }) => (
  <Header
    showNavBar={showNavBar}
    headerCenter={
      <Text style={{ fontSize: 1, fontWeight: "normal", color: "#8E8E93" }}>
        {title}
      </Text>
    }
  />
);

const LargeHeaderComponent = ({
  scrollY,
  title = "react native header",
  subtitle = "Welcome",
  note = "This project displays some header examples using the package.",
}) => (
  <LargeHeader>
    <ScalingView scrollY={scrollY}>
      <HeaderSubTitle>subtitle</HeaderSubTitle>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderBody>{note}</HeaderBody>
    </ScalingView>
  </LargeHeader>
);

export const HeaderScroll = ({ children, title }) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <ScrollViewWithHeaders
      HeaderComponent={HeaderComponent}
      LargeHeaderComponent={LargeHeaderComponent}
      contentContainerStyle={{ paddingBottom: bottom }}
    >
      <View>{children}</View>
    </ScrollViewWithHeaders>
  );
};

export const RightHeaderRef = ({ onPress, name = "ellipsis-horizontal" }) => (
  <Pressable onPress={onPress}>
    <Ionicons name={name} size={24} color="black" />
  </Pressable>
);
export const HeaderHome = ({ children, title, subtitle, rightRef }) => {
  return (
    <View>
      <View style={{ height: "2em", width: "100%" }}></View>
      <View
        style={{
          ...ProjectTheme.position.flexRowCenter,
          ...ProjectTheme.padding.item,
          ...ProjectTheme.colors.border.bottom,
          marginTop: 0,
          gap: ProjectTheme.gap.grid.md,
          backgroundColor: ProjectTheme.colors.background.primary,
        }}
      >
        <View style={{ flex: 1 }}>
          <HeaderTitle>{title}</HeaderTitle>
          <HeaderSubTitle color="secondary">{subtitle}</HeaderSubTitle>
        </View>
        <View>{rightRef}</View>
      </View>
    </View>
  );
};
