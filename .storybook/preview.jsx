import { View } from "react-native";
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
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
SplashScreen.preventAutoHideAsync();

/** @type{import("@storybook/react").Preview} */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      },
      defaultViewport: 'iphone14promax',
    },
  },

  decorators: [
    (Story, { parameters }) => {
      let [fontsLoaded, fontError] = useFonts({
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
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded, fontError]);

      if (!fontsLoaded && !fontError) {
        return null;
      }

      if (!fontsLoaded) {
        return <View></View>;
      }

      return (
        <View
          style={{
            flex: 1,
            backgroundColor:  parameters.noBackground === true ? null : "#1d232a",
            // paddingHorizontal: 2,
            // paddingEnd:0,
            // paddingStart:0,
            // paddingLeft:0,
            // paddingRight:0,
            // marginEnd:0,
            // marginStart:0,
            // marginLeft:0,
            // marginRight:0,
            // paddingVertical: 8,
            // maxWidth: 430,
            // maxHeight:900,
            // margin:"0 auto",
            
            // color: "#a6adbb"
          }}
          onLayout={onLayoutRootView}
        >
          <Story />
        </View>
      );
    },
  ],
};

export default preview;
