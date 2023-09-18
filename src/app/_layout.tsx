import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";

import { ThemeProvider, createTheme } from "@rneui/themed";

SplashScreen.preventAutoHideAsync();

const theme = createTheme({
  lightColors: {},
  darkColors: {},
});

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("@/client/assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("@/client/assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("@/client/assets/fonts/DMSans-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Stack />
    </ThemeProvider>
  );
};

export default Layout;
