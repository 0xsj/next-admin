import { InboxItem } from "structs";
import { Box, Text, TouchableOpacity } from "@/atoms";
import { memo, useCallback } from "react";
import { SwipeableView, BackViewProps } from "./swipeable-view";
import { ListActionView } from "./list-action";

export interface Props extends InboxItem {
  onPress: (id: string) => void;
  onSwipeLeft?: (id: string, done: () => void) => void;
}

export const ListItem: React.FC<Props> = memo((props) => {
  const { onPress, id, preview, dateCreated, subject, sender, recipient, onSwipeLeft } = props;
  const handlePress = useCallback(() => {
    // onItemPress(id);
    onPress(id);
  }, [id, onPress]);

  const handleSwipeLeft = useCallback(
    (done: () => void) => {
      onSwipeLeft && onSwipeLeft(id, done);
    },
    [id, onSwipeLeft]
  );

  const renderBackView = useCallback(
    ({ progress }: BackViewProps) => <ListActionView progress={progress} />,
    []
  );
  return (
    <SwipeableView bg="yellow" onSwipeLeft={handleSwipeLeft} backView={renderBackView}>
      <Box bg="$background">
        <TouchableOpacity bg="$background" px="lg" py="sm" onPress={handlePress}>
          <Box>
            <Text ellipsizeMode="tail" numberOfLines={2} fontSize={12} fontWeight={"bold"}>
              {subject}
            </Text>
            <Text ellipsizeMode="tail" numberOfLines={2} color={"$graySecondary"} fontSize={11}>
              {preview}
            </Text>
          </Box>
        </TouchableOpacity>
      </Box>
    </SwipeableView>
  );
});
