import { View } from "react-native";
import { SectionTitle } from "../Typography/Typography";
import { ContentRow, ContentRowBody, ContentRowRight } from "./Row";

export const RowSection = ({ title, children }) => {
  return (
    <View style={{ minHeight: 72 }}>
      <ContentRow style={{ minHeight: 72 }} height="full">
        <ContentRowBody>
          <SectionTitle>{title}</SectionTitle>
        </ContentRowBody>
        <ContentRowRight>
          <View style={{ marginRight: 16 }}>{children}</View>
        </ContentRowRight>
      </ContentRow>
    </View>
  );
};
