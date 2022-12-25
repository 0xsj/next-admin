import { SafeAreaView } from "react-native";
import { Box, Text } from "../atoms";
import { Feather } from "@expo/vector-icons";
import { useEffect } from "react";
export type Props = {};

export const Sidebar: React.FC = () => {
  const renderMenuItems = () => {};
  return (
    <Box flex={1} bg={"$sidebarBackground"}>
      <SafeAreaView>
        <Box flexDirection="row">
          <Feather name="inbox" color={"white"} size={16} />
          <Text color={"$foreground"} fontWeight={"bold"} fontSize={16}>
            Inbox
          </Text>
        </Box>
        <Box flexDirection="row">
          <Feather name="send" color={"blue"} size={16} />
          <Text color={"$foreground"} fontWeight={"bold"} fontSize={16}>
            Sent
          </Text>
        </Box>
        <Box flexDirection="row">
          <Feather name="edit" color={"gray"} size={16} />
          <Text color={"$foreground"} fontWeight={"bold"} fontSize={16}>
            Drafts
          </Text>
        </Box>
        <Box flexDirection="row">
          <Feather name="star" color={"yellow"} size={16} />
          <Text color={"$foreground"} fontWeight={"bold"} fontSize={16}>
            Starred
          </Text>
        </Box>
        <Box flexDirection="row">
          <Feather name="send" color={"green"} size={16} />
          <Text color={"$foreground"} fontWeight={"bold"} fontSize={16}>
            Archive
          </Text>
        </Box>
        <Box flexDirection="row">
          <Feather name="trash-2" color={"red"} size={16} />
          <Text color={"$foreground"} fontWeight={"bold"} fontSize={16}>
            Trash
          </Text>
        </Box>
      </SafeAreaView>
    </Box>
  );
};
