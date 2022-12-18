import { Button, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { RootTabScreenProps } from "../types";
import { Box, Text } from "../components/atoms";

export default function TabOneScreen({ navigation }: RootTabScreenProps<"TabOne">) {
  return (
    <Box bg="$navbarBackground" flex={1} justifyContent="center" alignItems={"center"}>
      <Button title="go to tab one" onPress={() => navigation.navigate("Home")} />
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
