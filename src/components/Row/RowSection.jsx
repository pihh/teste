import { View } from "react-native";
import { SectionTitle } from "../Typography/Typography";
import { ContentRow, ContentRowBody, ContentRowRight } from "./Row";
import ProjectTheme from "../../constants/theme";

export const RowSection = ({ title, children }) => {
  return (
    <View style={ { minHeight: 72 ,backgroundColor:ProjectTheme.colors.background.primary, width:"100%"} }>
      <ContentRow style={{ minHeight: 72,backgroundColor:ProjectTheme.colors.background.primary }} height="full">
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
