import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
export interface Props {
  onPress?: () => void;
  icon?: string | React.ReactNode;
  type?: IconType;
}

export type IconType = "add" | "edit" | "delete" | "back" | "close" | "mail";

export const IconButton: React.FC<Props> = (props) => {
  const { onPress, icon, type } = props;
  return (
    <TouchableOpacity>
      <Feather name="mail" size={24} color={"black"} />
    </TouchableOpacity>
  );
};
