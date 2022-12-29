import { Box, Text } from "@/atoms";
import React from "react";
type Props = {};

export const ListHeader = (_props: Props) => {
  return (
    <Box
      px="md"
      py="sm"
      flexDirection="row"
      justifyContent={"flex-start"}
      alignItems="center"
    >
      <Text ml="xs" mr="md" fontWeight={"bold"}>
        Header
      </Text>
    </Box>
  );
};
