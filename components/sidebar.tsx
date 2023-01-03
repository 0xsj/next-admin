import { SafeAreaView } from "react-native";
import { Box, Container, Text } from "@/atoms";
import { SidebarItem } from "./sidebar-item";

export const menuItems = [
  {
    id: 1,
    icon: "inbox",
    label: "Inbox",
    color: "black",
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
  // {
  //   id: 4,
  //   icon: "star",
  //   label: "Starred",
  //   color: "yellow",
  // },
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

export type Props = {};
export type MenuItems = "inbox" | "send" | "edit" | "star" | "send" | "trash-2";

export const Sidebar: React.FC = () => {
  return (
    <Container justifyContent={"space-between"}>
      <Box>
        <SafeAreaView>
          <Text fontSize={14} padding="sm">
            Folders
          </Text>
          {menuItems.map((item, index) => {
            const iconName = item.icon as MenuItems;
            return (
              <SidebarItem
                key={`${item.id}-${index}`}
                color={item.color}
                iconName={iconName}
                label={item.label}
              />
            );
          })}
        </SafeAreaView>
      </Box>
      <Box>
        <SafeAreaView>
          <SidebarItem color={"black"} iconName={"settings"} label={"Settings"} />
        </SafeAreaView>
      </Box>
    </Container>
  );
};
