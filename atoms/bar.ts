import { VariantProps, createRestyleComponent, createVariant } from "@shopify/restyle";
import { Animated } from "react-native";
import { Theme } from "theme";
import { Box, BoxProps } from "./box";

export const Bar = createRestyleComponent<VariantProps<Theme, "barVariants"> & BoxProps, Theme>(
  [createVariant({ themeKey: "barVariants" })],
  Box
);
