import { Text, StyleSheet } from "react-native";
import ProjectTheme from "../../constants/theme";

const Font = ({
  children,
  theme = "primary",
  path = [],
  color = "primary",
  clamp=null
}) => {
  let font = ProjectTheme.text[theme];

  color = ProjectTheme.text[theme].textColors[color];

  for (let p of path) {
    font = font[p];
  }

  return (
    <Text
    ellipsizeMode='tail'
    numberOfLines={clamp}
      style={{
        ...font,
        color: color,
      }}
    >
      {children}
    </Text>
  );
};

export const PageTitle = ({
  children,
  theme = "primary",
  color = "primary",
}) => {
  return (
    <Font path={["page", "title"]} theme={theme} color={color}>
      {children}
    </Font>
  );
};
// Header
export const HeaderTitle = ({
  children,
  theme = "primary",
  color = "primary",
}) => {
  return (
    <Font path={["header", "title"]} theme={theme} color={color}>
      {children}
    </Font>
  );
};
export const HeaderSubTitle = ({
  children,
  theme = "primary",
  color = "primary",
}) => {
  return (
    <Font path={["header", "subTitle"]} theme={theme} color={color}>
      {children}
    </Font>
  );
};
export const HeaderBody = ({
  children,
  theme = "primary",
  color = "primary",
}) => {
  return (
    <Font path={["header", "body"]} theme={theme} color={color}>
      {children}
    </Font>
  );
};
//Row
export const RowTitle = ({
  children,
  theme = "primary",
  color = "primary",
}) => {
  return (
    <Font path={["row", "title"]} theme={theme} color={color}>
      {children}
    </Font>
  );
};
export const RowSubTitle = ({
  children,
  theme = "primary",
  color = "primary",
}) => {
  
  return (
    <Font path={["row", "subTitle"]} theme={theme} color={color}>
      {children}
    </Font>
  );
};
export const RowBody = ({ children, theme = "primary", color = "primary" }) => {

  return (
    <Font path={["row", "body"]} theme={theme} color={color}>
      {children}
    </Font>
  );
};
export const RowSmall = ({
  children,
  theme = "primary",
  color = "primary",
}) => {
  return (
    <Font path={["row", "small"]} theme={theme} color={color}>
      {children}
    </Font>
  );
};
export const CardSmall = ({
  children,
  theme = "primary",
  color = "primary",
}) => {
  return (
    <Font path={["card", "small"]} theme={theme} color={color}>
      {children}
    </Font>
  );
};
// Card

export const CardTitle = RowTitle;
export const CardSubTitle = RowSubTitle;
export const CardBody  = ({ children, theme = "primary", color = "primary" }) => {

  return (
    <Font path={["row", "body"]} theme={theme} color={color} clamp={10} >
      {children}
    </Font>
  );
};


// Section
export const SectionTitle = ({
  children,
  theme = "primary",
  color = "primary",
}) => {
  return (
    <Font path={["section", "title"]} theme={theme} color={color}>
      {children}
    </Font>
  );
};

export const SectionSubTitle = ({
  children,
  theme = "primary",
  color = "primary",
}) => {
  return (
    <Font path={["section", "subTitle"]} theme={theme} color={color}>
      {children}
    </Font>
  );
};
// Text
export const P = ({ children, theme = "primary", color = "primary" }) => {
  return (
    <Font path={["paragraph"]} theme={theme} color={color}>
      {children}
    </Font>
  );
};
export const B = ({ children, theme = "primary", color = "primary" }) => {
  return (
    <Font path={["b"]} theme={theme} color={color}>
      {children}
    </Font>
  );
};
export const Small = ({ children, theme = "primary", color = "primary" }) => {
  return (
    <Font path={["small"]} theme={theme} color={color}>
      {children}
    </Font>
  );
};
export const SmallBold = ({
  children,
  theme = "primary",
  color = "primary",
}) => {
  return (
    <Font path={["smallBold"]} theme={theme} color={color}>
      {children}
    </Font>
  );
};
const styles = StyleSheet.create({
  root: {},
  ...ProjectTheme.text,
});
