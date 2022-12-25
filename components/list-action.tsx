import { AnimatedBox, Box } from "../atoms";
import React from "react";
import { SharedValue, useAnimatedStyle } from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";

interface Props {
  progress: Readonly<SharedValue<number>>;
}

export const ListActionView: React.FC<Props> = (props) => {
  const { progress } = props;
  const iconStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: progress.value,
      },
    ],
  }));

  return (
    <Box
      flex={1}
      bg="$primary"
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-end"
      pr="xl"
    >
      <AnimatedBox
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        style={iconStyle}
      >
        <Feather name="folder" color="white" size={18} />
        <Feather name="arrow-right" color="white" size={18} />
      </AnimatedBox>
    </Box>
  );
};
