import { Button, View } from "react-native";
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
        <IconButton type={"edit"} />
      </Box>
      <Box>
        <IconButton type={"delete"} />
      </Box>
      <Box>
        <IconButton type={"back"} />
      </Box>
      <Box>
        <IconButton type={"close"} />
      </Box>
      <Box>
        <IconButton type={"back"} />
      </Box>
      <Box>
        <IconButton />
      </Box>
      <Box>
        <Button
          color={"red"}
          title="navigate to main screen"
          onPress={() => navigation.navigate("Main")}
        />
      </Box>
    </Box>
  );
}
