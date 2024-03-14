import { Linking, Text, View } from "react-native";
import { Scroll } from "./Scroll/Scroll";
import { Pill } from "./Pill/Pill";
import { ContentRow } from "./Row/Row";

const StarterComponent = () => (
  <View style={{ padding: 16 }}>
    <Text>
      Thanks for trying out Storybook, follow the{" "}
      <Text
        style={{
          color: "blue",
          textDecorationLine: "underline",
          textDecorationColor: "blue",
        }}
        onPress={() =>
          Linking.openURL(
            "https://storybook.js.org/tutorials/intro-to-storybook/react-native/en/get-started/"
          )
        }
      >
        tutorial
      </Text>{" "}
      to learn how to create your own stories
    </Text>
    return (
    <View style={{ padding: 16 }}>
      <Text>
        Thanks for trying out Storybook, follow the{" "}
        <Text
          style={{
            color: "blue",
            textDecorationLine: "underline",
            textDecorationColor: "blue",
          }}
          onPress={() =>
            Linking.openURL(
              "https://storybook.js.org/tutorials/intro-to-storybook/react-native/en/get-started/"
            )
          }
        >
          tutorial
        </Text>{" "}
        to learn how to create your own stories
        <Scroll>
          <Pill active={true}>Active pill</Pill>
          <Pill>Normal pill</Pill>
          <Pill>Normal pill</Pill>
          <Pill>Normal pill</Pill>
          <Pill>Normal pill</Pill>
          <Pill>Normal pill</Pill>
          <Pill>Normal pill</Pill>
          <Pill>Normal pill</Pill>
          <Pill>Normal pill</Pill>
        </Scroll>
      </Text>
    </View>
    );
  </View>
);

const meta = {
  title: "Welcome",
  component: StarterComponent,
};

export default meta;

export const GettingStarted = {
  args: {},
  parameters: {
    noBackground: true,
  },
};
