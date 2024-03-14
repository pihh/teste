import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  GothicA1_100Thin,
  GothicA1_200ExtraLight,
  GothicA1_300Light,
  GothicA1_400Regular,
  GothicA1_500Medium,
  GothicA1_600SemiBold,
  GothicA1_700Bold,
  GothicA1_800ExtraBold,
  GothicA1_900Black,
} from "@expo-google-fonts/gothic-a1";

import { NavigationContainer } from "@react-navigation/native";


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AboutScreen, HomeScreen } from "./src/screens/Home";
import { UserCheckInScreen } from "./src/screens/UserCheckIn";


const Stack = createNativeStackNavigator();

function App() {
  let [fontsLoaded] = useFonts({
    GothicA1_100Thin,
    GothicA1_200ExtraLight,
    GothicA1_300Light,
    GothicA1_400Regular,
    GothicA1_500Medium,
    GothicA1_600SemiBold,
    GothicA1_700Bold,
    GothicA1_800ExtraBold,
    GothicA1_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  /*
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );*/
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="UserCheckIn"  screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="UserCheckIn" component={UserCheckInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

let AppEntryPoint = App;
/*
if (true || Constants?.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.storybook").default;
}
*/
const styles = StyleSheet.create({
  container: {
   
    // backgroundColor: "red",
    // overflow:"scroll",
    // height: 504
  },
});

export default AppEntryPoint;
