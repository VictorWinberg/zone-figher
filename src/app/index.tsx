import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView, View } from "react-native";

import { Map, Nav } from "@/client/components";
import { makeStyles } from "@rneui/themed";

const MapView = () => {
  const styles = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <View style={styles.main}>
        <Map />
      </View>

      <Nav />
    </SafeAreaView>
  );
};

export default MapView;

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  main: {
    flex: 1,
  },
}));
