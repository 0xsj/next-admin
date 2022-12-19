import { SafeAreaView } from "react-native";
import { Box, Text } from "../atoms";

export const Sidebar: React.FC = () => {
  return (
    <Box flex={1} bg={"$sidebarBackground"}>
      <SafeAreaView>
        <Text m="lg" variant={"sidebar"}>
          Sidebar
        </Text>
      </SafeAreaView>
    </Box>
  );
};
