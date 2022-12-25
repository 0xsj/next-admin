import { SafeAreaView } from "react-native";
import { Box, Container, Text } from "@/atoms";
import { Feather } from "@expo/vector-icons";
import { useEffect } from "react";
export type Props = {};

const menuItems = [
  {
    id: 1,
    icon: "inbox",
    label: "Inbox",
    color: "white",
  },
  {
    id: 2,
    icon: "send",
    label: "Sent",
    color: "blue",
  },
  {
    id: 3,
    icon: "edit",
    label: "Drafts",
    color: "gray",
  },
  {
    id: 4,
    icon: "star",
    label: "Starred",
    color: "yellow",
  },
  {
    id: 5,
    icon: "send",
    label: "Archive",
    color: "green",
  },
  {
    id: 6,
    icon: "trash-2",
    label: "Trash",
    color: "red",
  },
];

export const Sidebar: React.FC = () => {
  const renderMenuItems = () => {
    menuItems.map((item, index) => {
      // console.log(item);
    });
  };
  renderMenuItems();
  return (
    <Container>
      <Box flex={1}>
        <SafeAreaView>
          <Box flexDirection="row">
            <Feather name="inbox" color={"white"} size={16} />
            <Text color={"$foreground"} fontSize={16}>
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
    </Container>
  );
};
