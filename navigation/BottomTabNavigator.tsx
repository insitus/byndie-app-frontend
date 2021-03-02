import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Listing from '../screens/Listing';
import AddEvent from '../screens/AddEvent';
import { BottomTabParamList, ListingParamList, AddEventParamList, ProfileParamList } from '../types';
import Profile from '../screens/Profile';
import { Button, IconButton, Searchbar } from 'react-native-paper';
import { View } from 'react-native';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Listing"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Listing"
        component={ListingNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="view-dashboard" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="AddEvent"
        component={AddEventNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="bookmark" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
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
const ListingStack = createStackNavigator<ListingParamList>();

function ListingNavigator() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onSearchQueryChange = (query: string) => setSearchQuery(query);
  const searchHeader = () => (
    <View style={{justifyContent: 'center', flexDirection: 'row'}}>
      <Searchbar style={{alignSelf: 'flex-start'}} placeholder="Search" onChangeText={onSearchQueryChange} value={searchQuery} />
      <IconButton
        icon="filter"
        color='blue'
        size={20}
        onPress={() => console.log('Pressed')}
        style={{alignSelf: 'flex-end'}} 
      />
    </View>
  )

  return (
    <ListingStack.Navigator>
      <ListingStack.Screen
        name="Listing"
        component={Listing}
        options={{
          headerTitle: searchHeader
        }}
      />
    </ListingStack.Navigator>
  );
}

const AddEventStack = createStackNavigator<AddEventParamList>();

function AddEventNavigator() {
  return (
    <AddEventStack.Navigator>
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
