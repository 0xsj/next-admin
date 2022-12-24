import { Button } from "react-native";
import { Box, Text, Container } from "../atoms";
import { RootStackScreenProps } from "types";
import { List, Preview, Sidebar } from "../components";

export default function MainScreen({ navigation }: RootStackScreenProps<"Main">) {
  return (
    <Container flexDirection={"row"}>
      {/* <Box justifyContent={"center"} alignContent={"center"} flex={1} alignItems={"center"}>
        <Button
          color={"red"}
          title="navigate to calendar screen"
          onPress={() => navigation.navigate("Calendar")}
        />
      </Box> */}
      <Container>
        <Sidebar />
      </Container>
      <Container>
        <List />
      </Container>
      <Container>
        <Preview />
      </Container>
    </Container>
  );
}
