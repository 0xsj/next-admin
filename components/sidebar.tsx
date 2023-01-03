import { SafeAreaView } from "react-native";
import { Box, Container, Text } from "@/atoms";
import { Feather } from "@expo/vector-icons";
import { menuItems } from "@/utils";
export type Props = {};
export type MenuItems = "inbox" | "send" | "edit" | "star" | "send" | "trash-2";

export const Sidebar: React.FC = () => {
  return (
    <Container>
      <Box>
        <SafeAreaView>
          <Text fontSize={14} padding="sm">
            Folders
          </Text>

          {menuItems.map((item, index) => {
            const iconName = item.icon as MenuItems;
            return (
              <Box
                alignItems={"center"}
                width={"100%"}
                flexDirection={"row"}
                key={`${item.id}-${index}`}
              >
                <Box ml="md">
                  <Feather name={iconName} color={item.color} size={20} />
                </Box>
                <Text fontSize={14} fontWeight="500" padding="sm">
                  {item.label}
                </Text>
              </Box>
            );
          })}
        </SafeAreaView>
      </Box>
    </Container>
  );
};
