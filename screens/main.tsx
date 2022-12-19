import { Button } from "react-native";
import { Box, Text, Container } from "../atoms";
import { RootStackScreenProps } from "types";
import { List } from "../components";

export default function MainScreen({ navigation }: RootStackScreenProps<"Main">) {
  return (
    <Container justifyContent={"center"} alignItems={"center"}>
      <Text>asdlfkjasdlfkj</Text>
      <List />
    </Container>
  );
}
