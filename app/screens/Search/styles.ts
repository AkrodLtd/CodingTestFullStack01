import { StyleSheet } from "react-native";
import { ColorSchemeName } from "../../hooks/useColorScheme";

export const getStyles = (colorScheme: ColorSchemeName) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 4,
    },
    loadingContainer: {
      margin: 20,
    },
    buttonContainer: {
      marginHorizontal: 20,
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
    },
  });
};
