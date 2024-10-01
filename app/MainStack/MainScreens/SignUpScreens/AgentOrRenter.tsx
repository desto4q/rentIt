import {View, Text} from 'react-native';
import React from 'react';
import Header from '../../../components/Header';
import {IconUser, IconUserFilled} from '@tabler/icons-react-native';
import {colors, tw} from '../../../utils/utils';
import Button from '../../../components/buttons/Button';
import {useNavigation} from '@react-navigation/native';

export default function AgentOrRenter() {
  let navigation: any = useNavigation();
  return (
    <View style={tw('flex-1 ')}>
      <Header />
      <View
        style={tw(' self-center my-auto w-full max-w-[300px] justify-center')}>
        <View style={tw('self-center  items-center gap-4 max-w-[350px] ')}>
          <View>
            <IconUserFilled
              fill={colors.purple[600]}
              size={200}
              color={colors.purple[600]}
            />
          </View>
          <View style={tw(' w-full gap-2')}>
            <Text style={tw('text-lg text-center')}>
              Welcome Please Select Your Role to Continue
            </Text>
            <Text style={tw('self-center text-sm')}>
              We've sent a verification link to [user's email address]. Please
              check your inbox and click the link to verify your email.{' '}
            </Text>
          </View>
          <View style={tw('gap-4   w-full mt-4  ')}>
            <Button
              onPress={() => {
                navigation.navigate('NewAgent');
              }}
              title="Sign Up as Agent / Landord"
              style="w-full px-4"
            />
            <Button
              onPress={() => {
                navigation.navigate('NewRenter');
              }}
              title="Sign Up as Renter"
              style="bg-blue-600 "
            />
            {/* <Button
              title=" Sign Up as Agent or Landor"
              onPress={() => {
                navigation.navigate('NewAgent');
              }}
              style="w-full px-4"></Button>
            <Button
              title={'Sign Up as Renter'}
              onPress={() => {
                navigation.navigate('NewRenter');
              }}
              style="w-full px-4 bg-blue-600"></Button> */}
          </View>
        </View>
      </View>
    </View>
  );
}
