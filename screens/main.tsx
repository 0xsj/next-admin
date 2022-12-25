import { Box, Text, Container, TouchableOpacity } from "@/atoms";
import { HomeDrawerParamList, RootStackParamList } from "types";
import { HeaderBar, List } from "@/components";
import { Feather } from "@expo/vector-icons";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useCallback } from "react";
import { useStickyHeader } from "@/hooks";

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, "Main">,
  NativeStackScreenProps<RootStackParamList>
>;
export function MainScreen({ navigation }: Props) {
  const { handleNoteListLayout, handleScroll, headerBarHeight, headerBarStyle } = useStickyHeader();
  const sidebarToggle = useCallback(() => {
    navigation.toggleDrawer();
  }, [navigation]);
  const handleInboxItemPress = useCallback((id: string) => {
    navigation.navigate("Test", { id });
    console.log(id);
  }, []);

  return (
    <Container>
      <Container>
        <List
          onItemSwipeLeft={() => console.log("222222")}
          contentInsetTop={headerBarHeight}
          onScroll={handleScroll}
          onItemPress={handleInboxItemPress}
        />
        <HeaderBar style={headerBarStyle} onLayout={handleNoteListLayout}>
          <TouchableOpacity onPress={sidebarToggle} m="xs" p="xs" rippleBorderless>
            <Feather name="menu" size={22} color={"black"} />
          </TouchableOpacity>
          <Box flex={1} alignItems={"center"}>
            <Text fontWeight={"bold"}>Inbox</Text>
          </Box>
          <TouchableOpacity m="xs" p="xs" rippleBorderless>
            <Feather name="more-vertical" size={22} color={"black"} />
          </TouchableOpacity>
        </HeaderBar>
      </Container>
    </Container>
  );
}
