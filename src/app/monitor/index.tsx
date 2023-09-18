import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

import { Header, Nav } from "@/client/components";
import styles from "@/client/styles/monitor";

const Monitor = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Header>
        <Text style={styles.headerText}>Monitor</Text>
      </Header>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        <View style={{ flex: 1 }}>
          <Text>RIBBAN: Capturing 2 - 1</Text>
          <Text>KRONPRINSEN: Def 3 - 1</Text>
          <Text>LUGNET: Att 1 - 3</Text>
        </View>
      </ScrollView>

      <Nav />
    </SafeAreaView>
  );
};

export default Monitor;
