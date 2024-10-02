import {View, Text} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from '../BottomNav/BottomTab';
import SignIn from './MainScreens/SignIn';
import {useNavigation} from '@react-navigation/native';
import {lifeCycleObj} from '../temp/temp';
import SiginUpStack from './MainScreens/SiginUpStack';
let Stack = createNativeStackNavigator();
export default function StackNav() {
  return (
    <Stack.Navigator
      initialRouteName="signIn"
      screenOptions={{
        freezeOnBlur:true,
        headerShown: false,
      }}>
      {!lifeCycleObj.signedIn ? (
        <Stack.Screen name="signIn" component={SiginUpStack} />
      ) : (
        <Stack.Screen name="main" component={BottomTab} />
      )}
    </Stack.Navigator>
  );
}
