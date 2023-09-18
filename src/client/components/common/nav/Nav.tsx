import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

import { icons } from "@/client/constants";
import { makeStyles } from "@rneui/themed";

export default function Nav() {
  const styles = useStyles();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable style={styles.navBtn} onPress={() => router.push("/monitor/")}>
        <Image
          source={icons.saved}
          style={styles.navIcon}
          resizeMode="contain"
        />
        <Text>Monitor</Text>
      </Pressable>

      <Pressable style={styles.navBtn} onPress={() => router.push("/")}>
        <Image
          source={icons.home}
          style={styles.navIcon}
          resizeMode="contain"
        />
        <Text>Map</Text>
      </Pressable>

      <Pressable style={styles.navBtn} onPress={() => router.push("/profile/")}>
        <Image
          source={icons.profile}
          style={styles.navIcon}
          resizeMode="contain"
        />
        <Text>Profile</Text>
      </Pressable>
    </View>
  );
}

const useStyles = makeStyles(theme => ({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
  navBtn: {
    flex: 1,
    padding: theme.spacing.lg,
    alignItems: "center",
  },
  navIcon: {
    width: 30,
    height: 30,
  },
}));
