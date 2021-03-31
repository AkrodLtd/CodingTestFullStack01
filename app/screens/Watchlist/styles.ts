import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { ColorSchemeName } from "../../hooks/useColorScheme";

export const getStyles = (colorScheme: ColorSchemeName) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
  });
};
