import { RootStackParamList } from "types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as React from "react";
import { Box, Text, TouchableOpacity, Container } from "@/atoms";

type Props = NativeStackScreenProps<RootStackParamList, "Preview">;

export function PreviewScreen({ navigation, route }: Props) {
  return (
    <Container>
      <Box flex={1} alignItems="center" justifyContent={"center"}>
        <Text>detail screen</Text>
        <Text>{JSON.stringify(route.params)}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <Text>Go back</Text>
        </TouchableOpacity>
      </Box>
    </Container>
  );
}
