import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { ColorSchemeName } from "../../hooks/useColorScheme";

export const getStyles = (colorScheme: ColorSchemeName) => {
  return StyleSheet.create({
    title: {
      fontSize: 20,
      fontWeight: "700",
      color: Colors[colorScheme].text,
      marginTop: 8,
      marginBottom: 12
    },
  });
};
