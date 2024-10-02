import {View, Text} from 'react-native';
import React from 'react';
import {IconMail, IconMailFilled} from '@tabler/icons-react-native';
import {colors, tw} from '../../../utils/utils';
import Button from '../../../components/buttons/Button';
import Header from '../../../components/Header';

export default function VerifyEmail() {
  return (
    <View style={{flex: 1}}>
        <Header/>
      <View
        style={tw(
          'items-center justify-center my-auto max-w-[300px] w-full  self-center gap-2',
        )}>
        <IconMailFilled size={100} fill={colors.purple[700]} />
        <Text style={tw("text-center text-2xl")}>Verify Email Address</Text>

        <Text  style={[tw(""),{
            fontSize:16
        }]}>
          We've sent a verification link to [user's email address]. Please check
          your inbox and click the link to verify your email.
        </Text>
        <Button title="Resend Verification Link"  style='w-full mt-3'/>
        <Button title="Check Verifcation"  style='w-full mt-3 bg-blue-600'/>
      </View>
    </View>
  );
}
