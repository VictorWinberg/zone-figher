import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView, View } from "react-native";

import { Nav } from "@/client/components";
import { Text, makeStyles } from "@rneui/themed";

export default function MonitorView() {
  const styles = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <View style={styles.main}>
        <Text h1>Monitor</Text>
        <Text>RIBBAN: Capturing 2 - 1</Text>
        <Text>KRONPRINSEN: Def 3 - 1</Text>
        <Text>LUGNET: Att 1 - 3</Text>
      </View>

      <Nav />
    </SafeAreaView>
  );
}

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
}));
