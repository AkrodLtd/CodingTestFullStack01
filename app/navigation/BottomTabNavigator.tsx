import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import UpcomingScreen from "../screens/Upcoming";
import WatchlistScreen from "../screens/Watchlist";
import SearchScreen from "../screens/Search";
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Upcoming"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Upcoming"
        component={UpcomingTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="today" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Watchlist"
        component={WatchlistTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="reader" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function UpcomingTabNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="UpcomingTabNavigator"
        component={UpcomingScreen}
        options={{ headerTitle: "Upcoming Movies" }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function SearchTabNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerTitle: "Search your movie" }}
      />
    </TabTwoStack.Navigator>
  );
}

function WatchlistTabNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="WatchlistScreen"
        component={WatchlistScreen}
        options={{ headerTitle: "My Watchlist" }}
      />
    </TabTwoStack.Navigator>
  );
}
