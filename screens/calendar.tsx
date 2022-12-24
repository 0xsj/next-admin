import { Button, View } from "react-native";
import { Box, Text, Container } from "../atoms";
import { RootStackScreenProps } from "types";
import { IconButton } from "../components";
import { INBOX } from "../fixtures/inbox";

export function CalendarScreen({ navigation }: RootStackScreenProps<"Calendar">) {
  return (
    <Container>
      <Box flex={1} justifyContent={"center"} alignItems={"center"}>
        <Text>Calendar</Text>
        <Box p={"sm"}>
          <IconButton size={"s"} type={"add"} />
        </Box>
        <Box p={"sm"}>
          <IconButton size={"s"} type={"edit"} />
        </Box>
        <Box p={"sm"}>
          <IconButton size={"s"} type={"delete"} />
        </Box>
        <Box p={"sm"}>
          <IconButton size={"s"} type={"back"} />
        </Box>
        <Box p={"sm"}>
          <IconButton size={"m"} type={"close"} />
        </Box>
        <Box p={"sm"}>
          <IconButton size={"m"} type={"back"} />
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
    </Container>
  );
}
