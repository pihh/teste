import { Text, View } from "react-native";
import {
  ContentRow,
  ContentRowBody,
  ContentRowHeadline,
  ContentRowNote,
  ContentRowRight,
} from "./Row";
import { AntDesign } from "@expo/vector-icons";

export default {
  title: "Components/Row",
  component: ContentRow,
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

// const ButtonLeft = ({ children }) => <View className="left">{children}</View>;
// const ButtonRight = ({ children }) => <View className="right">{children}</View>;

// Button.Right = ButtonRight;
// Button.Left = ButtonLeft;
export const Default = {
  args: {
    thumbnail: {
      uri: "https://reactnative.dev/img/tiny_logo.png",
    },
    children: [
      <ContentRowHeadline key={1}>Headline</ContentRowHeadline>,
      <ContentRowBody key={2}>Body</ContentRowBody>,
      <ContentRowNote key={3}>Note</ContentRowNote>,
      <ContentRowRight key={4}>
        <AntDesign
          name="arrowright"
          size={16}
        />
      </ContentRowRight>,
    ],
  },
};

export const Slots = {
  args: {
    children: [
      <ContentRowHeadline key={1}>Headline</ContentRowHeadline>,
      <ContentRowBody key={2}>Body</ContentRowBody>,
      <ContentRowNote key={3}>Note</ContentRowNote>,
    ],
  },
};
export const SlotsAndThumbnail = {
  args: {
    thumbnail: {
      uri: "https://reactnative.dev/img/tiny_logo.png",
    },
    children: [
      <ContentRowHeadline key={1}>Headline</ContentRowHeadline>,
      <ContentRowBody key={2}>Body</ContentRowBody>,
      <ContentRowNote key={3}>Note</ContentRowNote>,
      <ContentRowRight key={4}>
        <AntDesign name="plus" size={16} />
      </ContentRowRight>,
    ],
  },
};
export const Blur = {
  args: {
    blur:true,
    thumbnail: {
      uri: "https://reactnative.dev/img/tiny_logo.png",
    },
    children: [
      <ContentRowHeadline key={1}>Headline</ContentRowHeadline>,
      <ContentRowBody key={2}>Body</ContentRowBody>,
      <ContentRowNote key={3}>Note</ContentRowNote>,
      <ContentRowRight key={4}>
        <AntDesign name="plus" size={16} />
      </ContentRowRight>,
    ],
  },
};
/*
export const Slots = {
  args: {
    ...Default.args,
    color: "error",
    children: [
      <ButtonLeft key="1">
        <AntDesign name="plus" size={16} />
      </ButtonLeft>,
      
        <Text key="2">xxx</Text>
      ,
      <ButtonRight key="3">
        <AntDesign name="minus" size={16} />
      </ButtonRight>,
    ],
  },
};
export const Error = {
  args: { ...Default.args, color: "error" },
};
export const Gradient = {
  args: { ...Default.args, color: "gradient" },
};
export const Small = {
  args: { ...Default.args, height: "sm" },
};
export const Fit = {
  args: { ...Default.args, width: "fit" },
};
export const Warning = {
  args: { ...Default.args, color: "warning" },
};
export const Success = {
  args: { ...Default.args, color: "success" },
};
export const Neutral = {
  args: { ...Default.args, color: "neutral" },
};
export const Loading = {
  args: { ...Default.args, loading: true },
};
export const LoadingWarning = {
  args: { ...Default.args, color: "warning", loading: true },
};
*/
