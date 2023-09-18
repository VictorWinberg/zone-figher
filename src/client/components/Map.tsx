import React from "react";
import { View } from "react-native";

import { Button, Text, makeStyles, useThemeMode } from "@rneui/themed";

export default function Map() {
  const styles = useStyles();
  const { setMode, mode } = useThemeMode();

  const handleOnPress = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <View style={styles.container}>
      <Text h1>Map</Text>
      <Text style={styles.text}>Welcome to Zone Fighter</Text>
      <Button onPress={handleOnPress}>Switch Theme</Button>
    </View>
  );
}

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginVertical: theme.spacing.lg,
  },
}));
