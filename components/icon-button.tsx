import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Box } from "../atoms/box";
export interface Props {
  onPress?: () => void;
  icon?: string | React.ReactNode;
  type?: IconType;
  color?: string;
  size?: IconSize;
}

export type IconType = "add" | "edit" | "delete" | "back" | "close" | "mail";
export type IconSize = "s" | "m" | "l" | string | number;
export const IconButton: React.FC<Props> = (props) => {
  const { onPress, icon, type, size = 24 } = props;

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

  const getIconSize = () => {
    switch (size) {
      case "s":
        return 10;
      case "m":
        return 20;
      case "l":
        return 28;
      default:
        return 24;
    }
  };

  return (
    <TouchableOpacity style={[styles.icon]}>
      <Box backgroundColor={"$primary"} style={[styles.container]}>
        <Feather name={getIcon()} size={getIconSize()} color={"#fff"} />
      </Box>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  container: {
    padding: 3,
    // backgroundColor: "blue",
    borderRadius: 50,
  },
  icon: {},
});
