import { Text, View } from "react-native";
import {
  ContentRow,
  ContentRowBody,
  ContentRowHeadline,
  ContentRowNote,
  ContentRowRight,
} from "./Row";
import { Pill } from "../Pill/Pill";
import { Ionicons } from "@expo/vector-icons";
import { RowSection } from "./RowSection";

export default {
  title: "Components/RowSection",
  component: RowSection,
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
    title: "Section title",
    children: [
      <ContentRowRight key={2}>
        <Pill>Right action</Pill>
      </ContentRowRight>,
    ],
  },
};
export const PillAndAction = {
  args: {
    title: "Section pill action",
    children: [
      <ContentRowRight key={1}>
        <Pill color="light" >
          <Text>Right action</Text>
          
            <Ionicons name="ellipsis-vertical"  color="black" style={{marginLeft:4}} />
   
        </Pill>
      </ContentRowRight>,
    ],
  },
};

export const TitleOnly = {
  args: {
    title: "Section title",
  },
};
