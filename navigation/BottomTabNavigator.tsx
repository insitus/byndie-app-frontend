import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ListEvents from '../screens/ListEvents';
import AddEvent from '../screens/AddEvent';
import MyEventRequests from '../screens/MyEventRequests';
import { BottomTabParamList, ListEventsParamList, AddEventParamList, ProfileParamList, MyEventRequestsParamList } from '../types';
import Profile from '../screens/Profile';
import { ThemeContext } from '../ThemeContext';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="ListEvents"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="ListEvents"
        component={ListEventsNavigator}
        options={{
          tabBarLabel: 'List events',
          tabBarIcon: ({ color }) => <TabBarIcon name="view-dashboard" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="AddEvent"
        component={AddEventNavigator}
        options={{
          tabBarLabel: 'Add event',
          tabBarIcon: ({ color }) => <TabBarIcon name="bookmark" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="MyEventRequests"
        component={MyEventRequestsNavigator}
        options={{
          tabBarLabel: 'Requests',
          tabBarIcon: ({ color }) => <TabBarIcon name="bell" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="face-profile" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof MaterialCommunityIcons>['name']; color: string }) {
  return <MaterialCommunityIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const ListStack = createStackNavigator<ListEventsParamList>();

function ListEventsNavigator() {
  const { header } =  React.useContext(ThemeContext);

  return (
    <ListStack.Navigator screenOptions={{ headerTitleStyle: header }}>
      <ListStack.Screen
        name="ListEvents"
        component={ListEvents}
        options={{headerTitle: 'Discover events'}}
      />
    </ListStack.Navigator>
  );
}

const AddEventStack = createStackNavigator<AddEventParamList>();

function AddEventNavigator() {
  const { header } =  React.useContext(ThemeContext);

  return (
    <AddEventStack.Navigator screenOptions={{ headerTitleStyle: header }}>
      <AddEventStack.Screen
        name="AddEvent"
        component={AddEvent}
        options={{ headerTitle: 'Add an event' }}
      />
    </AddEventStack.Navigator>
  );
}

const ProfileStack = createStackNavigator<ProfileParamList>();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{ headerTitle: 'Profile' }}
      />
    </ProfileStack.Navigator>
  );
}

const MyEventRequestsStack = createStackNavigator<MyEventRequestsParamList>();

function MyEventRequestsNavigator() {
  const { header } =  React.useContext(ThemeContext);
  
  return (
    <MyEventRequestsStack.Navigator screenOptions={{ headerTitleStyle: header }}>
      <MyEventRequestsStack.Screen
        name="MyEventRequests"
        component={MyEventRequests}
        options={{headerTitle: 'Requests'}}
      />
    </MyEventRequestsStack.Navigator>
  );
}
