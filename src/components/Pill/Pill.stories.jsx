import { Linking, StyleSheet, Text, View } from "react-native";
import { Pill } from "./Pill";
import { Scroll } from "../Scroll/Scroll";
import * as React from 'react';

import { LinearGradient } from 'expo-linear-gradient';



/* @hide const styles = StyleSheet.create({ ... }); */

const PillComponent = () => {
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

        <Scroll direction={"horizontal"}>
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
};

const meta = {
  title: "Components/Pill",
  component: PillComponent,
};

export default meta;

export const GettingStarted = {
  args: {},
  parameters: {
    noBackground: true,
  },
};
