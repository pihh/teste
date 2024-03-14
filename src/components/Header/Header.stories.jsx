import { Linking, Text, View } from "react-native";
import { HeaderHome, HeaderScroll, RightHeaderRef } from "./Header";
import {
  ContentRow,
  ContentRowBody,
  ContentRowHeadline,
  ContentRowNote,
  ContentRowRight,
} from "../Row/Row";
import { RowSection } from "../Row/RowSection";
import { Scroll } from "../Scroll/Scroll";
import { Pill } from "../Pill/Pill";
import { CardFooter, VerticalCard } from "../Card/Card";
import {
  CardBody,
  CardSmall,
  CardSubTitle,
  CardTitle,
  RowBody,
  SmallBold,
} from "../Typography/Typography";
import { loremIpsum } from "lorem-ipsum";
const lorem = loremIpsum({ count: 2 });
import { AntDesign } from "@expo/vector-icons";
import ProjectTheme from "../../constants/theme";
const thumbnail = require("../../assets/images/Cerveja.jpg");
const thumbnail1 = require("../../assets/images/Cerveja2.jpg");
const thumbnail2 = require("../../assets/images/Cerveja3.jpeg");

const StarterComponent = () => (
  <View
    style={{
      backgroundColor: "black",
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <View style={{ margin: "auto", width: 430, height: 930,overflow:"scroll" }}>
      <HeaderHome
        title="Olá Filipe"
        subtitle="O que te apetece hoje?"
        rightRef={<RightHeaderRef></RightHeaderRef>}
      ></HeaderHome>
      <View style={ProjectTheme.position.sticky}>


      <Scroll direction="horizontal">
        <Pill active={true}>Cerveja</Pill>
        <Pill>Whisky</Pill>
        <Pill>Rum</Pill>
        <Pill>Bagaço</Pill>
      </Scroll>
      </View>
      <Scroll >
        <View style={{marginTop:-12}}>
          <RowSection title="Cerveja">
       
            <Pill color="light">View all</Pill>
          </RowSection>
          <VerticalCard thumbnail={thumbnail}>
            <CardTitle>Sagres</CardTitle>
            <CardSmall color="danger">Sugestão</CardSmall>

            <RowBody color="secondary">
              <Text>
                Card body sec
                {lorem}
              </Text>
            </RowBody>
            <CardFooter color="warning">
              <AntDesign name="star" size={16} color="orange" />
              <AntDesign name="star" size={16} color="orange" />
              <AntDesign name="star" size={16} color="orange" />
              <AntDesign name="star" size={16} color="orange" />
              <AntDesign name="staro" size={16} color="orange" />
            </CardFooter>
          </VerticalCard>
        </View>
        <ContentRow thumbnail={thumbnail} padding={true}>
          <ContentRowHeadline>Sagres</ContentRowHeadline>
          <ContentRowBody color="secondary">Em stock</ContentRowBody>
          <ContentRowNote color="primary">
            <SmallBold>2.00 €</SmallBold>
          </ContentRowNote>
          <ContentRowRight>
            <AntDesign name="plus" size={16} />
          </ContentRowRight>
        </ContentRow>
        <ContentRow thumbnail={thumbnail1} padding={true}>
          <ContentRowHeadline>Super bock</ContentRowHeadline>
          <ContentRowBody color="">Em stock</ContentRowBody>
          <ContentRowNote color="primary">
            <SmallBold>2.00 €</SmallBold>
          </ContentRowNote>
          <ContentRowRight>
            <AntDesign name="plus" size={16} />
          </ContentRowRight>
        </ContentRow>
        <ContentRow thumbnail={thumbnail2} padding={true}>
          <ContentRowHeadline>Heineken</ContentRowHeadline>
          <ContentRowBody color="">Stock limitado</ContentRowBody>
          <ContentRowNote color="primary">
            <SmallBold>2.50 €</SmallBold>
          </ContentRowNote>
          <ContentRowRight>
            <AntDesign name="plus" size={16} />
          </ContentRowRight>
        </ContentRow>

        {Array(10)
          .fill(0)
          .map((a, i) => (
            <View key={i}>
              <RowSection title="Whisky"></RowSection>
              <ContentRow>content</ContentRow>
              <ContentRow>content</ContentRow>
              <ContentRow>content</ContentRow>
             
            </View>
          ))}
      </Scroll>
    </View>
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
