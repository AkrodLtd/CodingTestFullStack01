import {
  ColorSchemeName as DefaultColorSchemeName,
  useColorScheme as getColorScheme,
} from "react-native";

export type ColorSchemeName = NonNullable<DefaultColorSchemeName>;

export default function useColorScheme(): ColorSchemeName {
  return getColorScheme() as ColorSchemeName;
}
