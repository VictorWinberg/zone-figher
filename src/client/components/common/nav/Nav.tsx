import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

import { icons } from "@/client/constants";

import styles from "./nav.style";

const Nav = () => {
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
};

export default Nav;
