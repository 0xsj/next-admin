import { Button } from "react-native";
import { Box, Text, Container } from "../atoms";
import { RootStackScreenProps } from "types";
import { List } from "../components";

export default function MainScreen({ navigation }: RootStackScreenProps<"Main">) {
  return (
    <Container justifyContent={"center"} alignItems={"center"}>
      <Box justifyContent={"center"} alignContent={"center"} flex={1} alignItems={"center"}>
        <Text>Main Screen</Text>
        <Button
          color={"red"}
          title="navigate to calendar screen"
          onPress={() => navigation.navigate("Calendar")}
        />
      </Box>
      <List />
    </Container>
  );
}
