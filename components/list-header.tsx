import { Box, Text } from "@/atoms";
import React from "react";
type Props = {};

export const ListHeader = (_props: Props) => {
  return (
    <Box px="md" py="sm" flexDirection="row" justifyContent={"flex-start"} alignItems="center">
      <Text fontSize={12} numberOfLines={1} ml="xs" mr="md" fontWeight={"bold"}>
        All Messages
      </Text>
    </Box>
  );
};
