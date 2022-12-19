import { createBox } from "@shopify/restyle";
import { FlatListProps } from "react-native";
import Animated, { AnimateProps } from "react-native-reanimated";
import { Note } from "structs";
import { Theme } from "theme";

export const StyledFlatList = createBox<Theme, AnimateProps<FlatListProps<Note>>>(
  Animated.FlatList
);
