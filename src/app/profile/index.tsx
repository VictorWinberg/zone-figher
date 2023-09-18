import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView, View } from "react-native";

import { Nav } from "@/client/components";
import { Text, makeStyles } from "@rneui/themed";

export default function ProfileView() {
  const styles = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <View style={styles.main}>
        <Text h1>Profile</Text>
        <Text>This is the your profile page!</Text>
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
