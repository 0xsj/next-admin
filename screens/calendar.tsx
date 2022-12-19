import { View } from "react-native";
import { Box, Text } from "../atoms";
import { RootStackScreenProps } from "types";
import { IconButton } from "../components";

export function CalendarScreen({ navigation }: RootStackScreenProps<"Calendar">) {
  return (
    <Box flex={1} justifyContent={"center"} alignItems={"center"}>
      <Text>Calendar</Text>
      <Box>
        <IconButton type={"add"} />
      </Box>
      <Box>
        <IconButton type={"add"} />
      </Box>
      <Box>
        <IconButton type={"add"} />
      </Box>
      <Box>
        <IconButton type={"add"} />
      </Box>
    </Box>
  );
}
