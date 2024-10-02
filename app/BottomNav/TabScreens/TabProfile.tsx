import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileHome from './ProfileScreens/ProfileHome';
import ProfileEdit from './ProfileScreens/ProfileEdit';
import ProfilePassword from './ProfileScreens/ProfilePassword';
import ProfileBookings from './ProfileScreens/ProfileBookings';
import ProfileTransactions from './ProfileScreens/ProfileTransactions';

let ProfileStack = createStackNavigator();
export default function TabProfile() {
  return (
    <ProfileStack.Navigator
      screenOptions={
        {
          // headerShown: false,
        }
      }>
      <ProfileStack.Screen
        name="ProfileHome"
        options={{
          title: 'Profile',
        }}
        component={ProfileHome}
      />
      <ProfileStack.Screen
        options={{
          title: 'Edit',
        }}
        name="ProfileEdit"
        component={ProfileEdit}
      />
      <ProfileStack.Screen
        options={{
          title: 'Change Password',
        }}
        name="ProfilePassword"
        component={ProfilePassword}
      />
      <ProfileStack.Screen
        options={{
          title: 'Booking History',
        }}
        name="ProfileBookings"
        component={ProfileBookings}
      />
          <ProfileStack.Screen
        options={{
          title: 'Transaction History',
        }}
        name="ProfileTransactions"
        component={ProfileTransactions}
      />
    </ProfileStack.Navigator>
  );
}
