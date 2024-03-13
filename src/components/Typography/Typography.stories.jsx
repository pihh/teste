import { Linking, Text, View } from "react-native";
import {  B, CardBody, CardSmall, CardSubTitle, CardTitle, HeaderBody, HeaderSubTitle, HeaderTitle, P, PageTitle, RowBody, RowSmall, RowSubTitle, RowTitle, Small } from "./Typography";

const TypographyComponent = () => (
  <View style={{ padding: 16 }}>
   
   <PageTitle>Page title</PageTitle>
   <HeaderTitle>HeaderTitle</HeaderTitle>
   <HeaderSubTitle>HeaderSubTitle</HeaderSubTitle>
   <HeaderBody>HeaderBody</HeaderBody>
   <RowTitle>RowTitle</RowTitle>
   <RowSubTitle>RowSubTitle</RowSubTitle>
   <RowBody>RowBody</RowBody>
   <RowSmall>RowSmall</RowSmall>
   <CardTitle>CardTitle</CardTitle>
   <CardSubTitle>CardSubTitle</CardSubTitle>
   <CardBody>CardBody</CardBody>
   <CardSmall>CardSmall</CardSmall>
   <P>P</P>
   <B>B</B>
   <Small>Small</Small>
  </View>
);

const meta = {
  title: "Components/Typography",
  component: TypographyComponent,
};

export default meta;

export const Default = {
  args: {},
  parameters: {
    noBackground: true,
  },
};
