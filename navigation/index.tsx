/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import {
  HomeDrawerParamList,
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainScreen from "../screens/main";
import { Sidebar } from "../components/sidebar";
import { CalendarScreen } from "../screens/calendar";
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<HomeDrawerParamList>();

function Home() {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{
        drawerType: "front",
        drawerStyle: {
          width: 280,
        },
        swipeEdgeWidth: 200,
        swipeEnabled: true,
      }}
      drawerContent={Sidebar}
    >
      <Drawer.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Calendar" component={CalendarScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

// function BottomTabNavigator() {
//   const colorScheme = useColorScheme();

//   return (
//     <BottomTab.Navigator
//       initialRouteName="TabOne"
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme].tint,
//       }}
//     >
//       <BottomTab.Screen
//         name="TabOne"
//         component={TabOneScreen}
//         options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
//           title: "Tab One",
//           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//         })}
//       />
//       <BottomTab.Screen
//         name="TabTwo"
//         component={TabTwoScreen}
//         options={{
//           title: "Tab Two",
//           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//         }}
//       />
//     </BottomTab.Navigator>
//   );
// }

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
