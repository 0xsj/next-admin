import { createBox } from "@shopify/restyle";
import React from "react";
import { ViewProps } from "react-native";
import Animated, { AnimateProps } from "react-native-reanimated";
import { Theme } from "theme";

export const AnimatedBox = createBox<Theme, AnimateProps<ViewProps>>(Animated.View);
export type AnimatedBoxProps = React.ComponentProps<typeof AnimatedBox>;
