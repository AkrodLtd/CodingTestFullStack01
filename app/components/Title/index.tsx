import React from "react";
import { Text } from "react-native";
import useColorScheme from "../../hooks/useColorScheme";
import { getStyles } from "./styles";

export type TitleProps = Text["props"];

export default (props: TitleProps) => {
  const style = getStyles(useColorScheme());

  return <Text style={style.title} {...props} />;
};
