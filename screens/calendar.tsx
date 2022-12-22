import { Button, View } from "react-native";
import { Box, Text } from "../atoms";
import { RootStackScreenProps } from "types";
import { IconButton } from "../components";

export function CalendarScreen({ navigation }: RootStackScreenProps<"Calendar">) {
  return (
    <Box flex={1} justifyContent={"center"} alignItems={"center"}>
      <Text>Calendar</Text>
      <Box p={"sm"}>
        <IconButton type={"add"} />
      </Box>
      <Box p={"sm"}>
        <IconButton type={"edit"} />
      </Box>
      <Box p={"sm"}>
        <IconButton type={"delete"} />
      </Box>
      <Box p={"sm"}>
        <IconButton type={"back"} />
      </Box>
      <Box p={"sm"}>
        <IconButton type={"close"} />
      </Box>
      <Box p={"sm"}>
        <IconButton type={"back"} />
      </Box>
      <Box p={"sm"}>
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
