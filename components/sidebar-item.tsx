import { Box, Text } from "@/atoms";
import { Feather } from "@expo/vector-icons";

export type Props = {
  color: string;
  iconName: any; // any type for now
  label: string;
};

export const SidebarItem: React.FC<Props> = (props) => {
  const { color, iconName, label } = props;
  return (
    <Box alignItems={"center"} width={"100%"} flexDirection={"row"}>
      <Box ml="md">
        <Feather name={iconName} color={color} size={20} />
      </Box>
      <Text fontSize={14} fontWeight="500" padding="sm">
        {label}
      </Text>
    </Box>
  );
};
