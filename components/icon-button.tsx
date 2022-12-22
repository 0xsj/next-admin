import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
export interface Props {
  onPress?: () => void;
  icon?: string | React.ReactNode;
  type?: IconType;
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
    <TouchableOpacity>
      <View style={[styles.container]}>
        <Feather name={getIcon()} size={24} color={"black"} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#2222",
    borderRadius: 50,
  },
});
