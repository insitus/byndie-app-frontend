import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ListEvents from '../screens/ListEvents';
import AddEvent from '../screens/AddEvent';
import { BottomTabParamList, ListEventsParamList, AddEventParamList, ProfileParamList } from '../types';
import Profile from '../screens/Profile';
// import { IconButton, Searchbar } from 'react-native-paper';
// import { View } from 'react-native';
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
  // const [searchQuery, setSearchQuery] = React.useState('');

  // const onSearchQueryChange = (query: string) => setSearchQuery(query);
  // const searchHeader = () => (
  //   <View style={{justifyContent: 'center', flexDirection: 'row'}}>
  //     <Searchbar style={{alignSelf: 'flex-start'}} placeholder="Search" onChangeText={onSearchQueryChange} value={searchQuery} />
  //     <IconButton
  //       icon="filter"
  //       color='blue'
  //       size={20}
  //       onPress={() => console.log('Pressed')}
  //       style={{alignSelf: 'flex-end'}} 
  //     />
  //   </View>
  // )

  return (
    <ListStack.Navigator>
      <ListStack.Screen
        name="ListEvents"
        component={ListEvents}
        options={{
          headerShown: false
        }}
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
