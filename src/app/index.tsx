import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";

import { Header, Nav } from "@/client/components";
import styles from "@/client/styles/map";

const Map = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Header>
        <Text>Map</Text>
      </Header>

      <View style={styles.main}>Map View</View>

      <Nav />
    </SafeAreaView>
  );
};

export default Map;
