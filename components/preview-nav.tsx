import { Feather } from "@expo/vector-icons";
import { Box, Container, Text } from "@/atoms";
import { IconButton } from "./icon-button";
export const PreviewNav: React.FC = () => {
  return (
    <Container flex={1} flexDirection={"row"}>
      <Box justifyContent={"space-evenly"} flexDirection={"row"} borderColor={"red"}>
        <IconButton size={"s"} type={"add"} />
        <IconButton size={"s"} type={"edit"} />
        <IconButton size={"s"} type={"delete"} />
        <IconButton size={"s"} type={"back"} />
        <IconButton size={"s"} type={"close"} />
        <IconButton size={"s"} type={"back"} />
      </Box>
      <Box flexDirection={"row"}>
        <IconButton size={"s"} type={"back"} />
      </Box>
    </Container>
  );
};
