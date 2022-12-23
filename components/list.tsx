import { useCallback } from "react";
import { View, Text, FlatListProps } from "react-native";
import { ListItem } from ".";
import { Note } from "structs";
import { createBox } from "@shopify/restyle";
import { Theme } from "theme";
import Animated, { AnimateProps } from "react-native-reanimated";

export interface Props {
  onItemPress?: (refId: string) => void;
}

export const StyledFlatList = createBox<Theme, AnimateProps<FlatListProps<Note>>>(
  Animated.FlatList
);

export const List: React.FC<Props> = (props) => {
  const { onItemPress } = props;
  const renderItem = useCallback(
    ({ item }: { item: any }) => {
      return <ListItem {...item} />;
    },
    [onItemPress]
  );
  return (
    <StyledFlatList
      data={[]}
      contentInsetAdjustmentBehavior="automatic"
      renderItem={renderItem}
      width={"100%"}
      keyExtractor={(item) => item.id}
    />
  );
};
