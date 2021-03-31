import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { ColorSchemeName } from "../../hooks/useColorScheme";

export const getStyles = (colorScheme: ColorSchemeName) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignSelf: "center",
      flexGrow: 0,
      backgroundColor: Colors[colorScheme].tint,
      marginTop: 12
    },
  });
};
