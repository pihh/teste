import { Text, View } from "react-native";
import { Button, ButtonLeft, ButtonRight } from "./Button";
import { AntDesign } from "@expo/vector-icons";

export default {
  title: "Components/Button",
  component: Button,
  decorators: [
    (Story) => (
      <View style={{  flex: 1 }}>
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
    children: "teste",
    color: "light",
    height: "md",
    width: "full",
    loading: false,
  },
};
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
