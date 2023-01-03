import { SafeAreaView } from "react-native";
import { Box, Container, Text } from "@/atoms";
import { menuItems } from "@/utils";
import { SidebarItem } from "./sidebar-item";

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
