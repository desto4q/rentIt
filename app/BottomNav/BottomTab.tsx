import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabHome from './TabScreens/TabHome';
import TabShortList from './TabScreens/TabShortList';
import TabProfile from './TabScreens/TabProfile';
import {IconHeart, IconHome, IconUser} from '@tabler/icons-react-native';
import {colors} from '../utils/utils';
let BTab = createBottomTabNavigator();
export default function BottomTab() {
  return (
    <BTab.Navigator>
      <BTab.Screen
        name="Home"
        component={TabHome}
        options={{
          tabBarIcon: () => {
            return <IconHome size={22} color={colors.neutral[400]} />;
          },
        }}
      />
      <BTab.Screen
        name="ShortList"
        component={TabShortList}
        options={{
          tabBarIcon: () => {
            return <IconHeart size={22} color={colors.neutral[400]} />;
          },
        }}
      />
      <BTab.Screen
        name="Profile"
        component={TabProfile}
        options={{
          tabBarIcon: () => {
            return <IconUser   size={22} color={colors.neutral[400]} />;
          },
        }}
        />
    </BTab.Navigator>
  );
}
