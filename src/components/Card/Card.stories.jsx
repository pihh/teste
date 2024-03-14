import { View } from "react-native";
import { CardFooter, VerticalCard } from "./Card";
import { loremIpsum } from "lorem-ipsum";
import * as React from "react";
import {
  CardBody,
  CardSmall,
  CardSubTitle,
  CardTitle,
} from "../Typography/Typography";

/* @hide const styles = StyleSheet.create({ ... }); */
const lorem = loremIpsum(); // generates one sentence
export default {
  title: "Components/Card",
  component: VerticalCard,
  decorators: [
    (Story) => (
      <View style={{ flex: 1 }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    // onPress: { action: 'onPinTask' },
    // onArchiveTask: { action: 'onArchiveTask' },
  },
};

export const Default = {
  args: {
    children: [
      <CardSmall key={1} >Small</CardSmall>,
      <CardTitle key={2}>Title</CardTitle>,
      <CardSubTitle key={3}>{lorem}</CardSubTitle>,
      <CardBody  key={4}>{lorem}</CardBody>,
      <CardFooter key={5}>Footer</CardFooter>,
    ]
  },
};
