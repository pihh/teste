import { View, Text } from "react-native";
import { Scroll } from "../components/Scroll/Scroll";
import { RowSection } from "../components/Row/RowSection";
import {
  ContentRow,
  ContentRowBody,
  ContentRowHeadline,
  ContentRowNote,
  ContentRowRight,
} from "../components/Row/Row";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import {
  CardBody,
  CardSmall,
  CardTitle,
  RowBody,
  RowSmall,
  RowSubTitle,
  RowTitle,
  Small,
  SmallBold,
} from "../components/Typography/Typography";
import { CardFooter, VerticalCard } from "../components/Card/Card";
import { Pill } from "../components/Pill/Pill";
import { HeaderHome, RightHeaderRef } from "../components/Header/Header";
import ProjectTheme from "../constants/theme";
import { loremIpsum } from "lorem-ipsum";
const lorem = loremIpsum({ count: 2 });

const thumbnail = require("../assets/images/Cerveja.jpg");
const thumbnail1 = require("../assets/images/Cerveja2.jpg");
const thumbnail2 = require("../assets/images/Cerveja3.jpeg");
export const UserCheckInScreen = ({navigation}) => {
  return (
    <Scroll  style={{overflow:"scroll", paddingTop:0, height:"100dvh"}}>
      <HeaderHome
        title="Olá Filipe"
        subtitle="O que te apetece hoje?"
        rightRef={<RightHeaderRef onPress={() => navigation.navigate("Home")}></RightHeaderRef>}
      ></HeaderHome>
      <View style={ProjectTheme.position.sticky}>
        <Scroll direction="horizontal">
          <Pill active={true}>Cerveja</Pill>
          <Pill>Whisky</Pill>
          <Pill>Rum</Pill>
          <Pill>Bagaço</Pill>
        </Scroll>
      </View>
      <View>
        <View style={{ marginTop: -11 }}>
          <RowSection title="Cerveja">
            <Pill color="light">View all</Pill>
          </RowSection>
          <VerticalCard thumbnail={thumbnail}>
            <CardTitle>Sagres</CardTitle>
            <CardSmall color="danger">Sugestão</CardSmall>

            <CardBody color="secondary">
              <Text>
                Card body sec
                {lorem}
              </Text>
            </CardBody>
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
      </View>
    </Scroll>
  );
};
