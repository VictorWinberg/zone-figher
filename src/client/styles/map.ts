import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  main: {
    backgroundColor: COLORS.secondary,
    flex: 1,
    fontSize: SIZES.xxLarge,
  },
});

export default styles;
