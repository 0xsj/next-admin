import { SafeAreaView } from "react-native";
import { Box, Container, Text } from "@/atoms";
import { Feather } from "@expo/vector-icons";
import { menuItems } from "@/utils";
export type Props = {};
export type MenuItems = "inbox" | "send" | "edit" | "star" | "send" | "trash-2";

export const Sidebar: React.FC = () => {
  return (
    <Container>
      <Box flex={1}>
        <SafeAreaView>
          {menuItems.map((item, index) => {
            const iconName = item.icon as MenuItems;
            return (
              <Box key={`${item.id}-${index}`}>
                <Feather name={iconName} color={item.color} size={16} />
                <Text>{item.label}</Text>
              </Box>
            );
          })}
        </SafeAreaView>
      </Box>
    </Container>
  );
};
