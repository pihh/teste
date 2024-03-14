import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import ProjectTheme from "../../constants/theme";

export const Scroll = function ({ children, direction }) {
  let horizontal = "horizontal" === direction;
  return (
    <SafeAreaView style={{backgroundColor:ProjectTheme.colors.background.primary}}>
      <ScrollView
        horizontal={horizontal}
        vertical={!horizontal}
        style={styles.scrollView[horizontal ? "horizontal" : "vertical"]}
        overScrollMode={"always"}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    
    horizontal: { paddingHorizontal: ProjectTheme.row.paddingLeft },
    vertical: { paddingVertical: ProjectTheme.row.paddingTop },
  },
});
