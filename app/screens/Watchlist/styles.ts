import { StyleSheet } from "react-native";
import { ColorSchemeName } from "../../hooks/useColorScheme";

export const getStyles = (colorScheme: ColorSchemeName) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    loadingContainer: {
      margin: 20,
    },
  });
};
