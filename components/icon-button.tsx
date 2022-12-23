import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Box } from "../atoms/box";
export interface Props {
  onPress?: () => void;
  icon?: string | React.ReactNode;
  type?: IconType;
  color?: string;
}

export type IconType = "add" | "edit" | "delete" | "back" | "close" | "mail";

export const IconButton: React.FC<Props> = (props) => {
  const { onPress, icon, type } = props;

  const getIcon = () => {
    switch (type) {
      case "add":
        return "plus";
      case "edit":
        return "edit";
      case "delete":
        return "trash";
      case "back":
        return "arrow-left";
      case "close":
        return "x";
      case "mail":
        return "mail";
      default:
        return "plus";
    }
  };

  return (
    <TouchableOpacity style={[styles.icon]}>
      <Box style={[styles.container]}>
        <Feather name={getIcon()} size={24} color={"#fff"} />
      </Box>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  container: {
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 50,
  },
  icon: {},
});
