import { Box, Text } from "@/atoms";
import { User } from "@/structs";

export const UserAvatar: React.FC = (props) => {
  return (
    <Box
      flexDirection={"row"}
      justifyContent="center"
      alignItems={"center"}
      width={30}
      height={30}
      backgroundColor={"blue"}
      borderRadius={"sm"}
    >
      <Text color={"white"}>JG</Text>
    </Box>
  );
};
