import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import BottomTab from './BottomNav/BottomTab';
import StackNav from './MainStack/StackNav';
import { colors } from './utils/utils';
export default function Main() {
  let my_theme = {
    ...DarkTheme,
    colors: {...DarkTheme.colors, background: colors.neutral[900]},
  };
  return (
    <NavigationContainer theme={my_theme}>
      <StatusBar backgroundColor={colors.neutral[900]}/>
      <StackNav />
    </NavigationContainer>
  );
}
