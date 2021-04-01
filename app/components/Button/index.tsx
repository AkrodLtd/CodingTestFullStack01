import React from "react";
import { Button as DefaultButton, View } from "react-native";
import useColorScheme from "../../hooks/useColorScheme";
import { getStyles } from "./styles";

export type ButtonProps = DefaultButton["props"];

export default (props: ButtonProps) => {
  const style = getStyles(useColorScheme());

  return (
    <View style={style.container}>
      <DefaultButton color="#fff" {...props} />
    </View>
  );
};
