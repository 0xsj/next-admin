import { Button } from "react-native";
import { Box, Text, Container } from "../atoms";
import { RootStackScreenProps } from "types";
import { HeaderBar, List, Preview, Sidebar } from "../components";
import { Header } from "react-native/Libraries/NewAppScreen";
import { Feather } from "@expo/vector-icons";

export default function MainScreen({ navigation }: RootStackScreenProps<"Main">) {
  return (
    <Container>
      {/* <Container>
        <Sidebar />
      </Container> */}
      <Container>
        <List />
        <HeaderBar>
          <Feather name="menu" size={22} color={"black"} />
          <Feather name="more-vertical" size={22} color={"black"} />
        </HeaderBar>
      </Container>
      {/* <Container>
        <Preview />
      </Container> */}
    </Container>
  );
}
