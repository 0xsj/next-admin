import { Button } from "react-native";
import { Box, Text, Container, TouchableOpacity } from "../atoms";
import { RootStackScreenProps } from "types";
import { HeaderBar, List, Preview, Sidebar } from "../components";
import { Feather } from "@expo/vector-icons";

export default function MainScreen({ navigation }: RootStackScreenProps<"Main">) {
  return (
    <Container>
      <Container>
        <List />
        <HeaderBar>
          <TouchableOpacity m="xs" p="xs" rippleBorderless>
            <Feather name="menu" size={22} color={"black"} />
          </TouchableOpacity>
          <Box flex={1} alignItems={"center"}>
            <Text fontWeight={"bold"}>Inbox</Text>
          </Box>
          <TouchableOpacity m="xs" p="xs" rippleBorderless>
            <Feather name="more-vertical" size={22} color={"black"} />
          </TouchableOpacity>
        </HeaderBar>
      </Container>
    </Container>
  );
}
