/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ColorSchemeName } from "react-native";
import { HomeDrawerParamList, RootStackParamList, RootTabParamList } from "@/types";
import LinkingConfiguration from "./LinkingConfiguration";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Sidebar } from "@/components/sidebar";
import { CalendarScreen, PreviewScreen, MainScreen } from "@/screens";

export default function Navigation({}: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
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
      <Stack.Screen name="Preview" component={PreviewScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Calendar" component={CalendarScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Test" component={Home} options={{ headerShown: false }} />
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
