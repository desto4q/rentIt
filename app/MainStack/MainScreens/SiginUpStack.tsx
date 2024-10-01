import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AgentOrRenter from './SignUpScreens/AgentOrRenter';
import SignIn from './SignIn';
import NewAccountAgent from './SignUpScreens/NewAccountAgent';
import NewAccountRenter from './SignUpScreens/NewAccountRenter';
import VerifyEmail from './SignUpScreens/VerifyEmail';
let LoginStack = createNativeStackNavigator();
export default function SiginUpStack() {
  return (
    <LoginStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <LoginStack.Screen name="SignIn" component={SignIn} />
      <LoginStack.Screen name="AgentOrRenter" component={AgentOrRenter} />
      <LoginStack.Screen name="NewAgent" component={NewAccountAgent} />
      <LoginStack.Screen name="NewRenter" component={NewAccountRenter} />
      <LoginStack.Screen name="VerifyEmail" component={VerifyEmail} />
    </LoginStack.Navigator>
  );
}
