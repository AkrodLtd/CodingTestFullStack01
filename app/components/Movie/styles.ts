import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { ColorSchemeName } from "../../hooks/useColorScheme";

export const getStyles = (colorScheme: ColorSchemeName) => {
  return StyleSheet.create({
    movie: {
      flex: 1,
      flexDirection: "row",
      marginHorizontal: 20,
      marginVertical: 10,
      alignItems: "flex-start",
      justifyContent: "space-between",
      backgroundColor: Colors[colorScheme].backgroundShadow,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8,
    },
    poster: {
      width: 140,
      height: 200,
    },
    infobox: {
      flex: 1,
      alignItems: "flex-start",
      marginLeft: 12,
      marginRight: 8,
    },
  });
};
