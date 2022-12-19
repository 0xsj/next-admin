import { Note } from "structs";
import { View, Text, TouchableOpacity } from "react-native";

export interface Props extends Note {
  onPress?: (refId: string) => void;
}

export const ListItem: React.FC<Props> = (props) => {
  const { onPress, id } = props;
  return (
    <View>
      <TouchableOpacity>
        <Text>List Item</Text>
      </TouchableOpacity>
    </View>
  );
};
