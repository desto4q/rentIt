import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {tw} from '../../../utils/utils';
import Input from '../../../components/Input';
import {useForm} from 'react-hook-form';
import Button from '../../../components/buttons/Button';

export default function NewAccountAgent() {
  const {control} = useForm();

  return (
    <View>
      <ScrollView
        style={tw('my-2 px-4 gap-2')}
        contentContainerStyle={tw('gap-2  ')}>
        <Text style={tw('my-2 self-center text-center text-xl')}>
          Create a Agent Account
        </Text>
        <Input
          control={control}
          title={'Firstname'}
          placeHolder={'First name'}
        />
        <Input control={control} title={'Lastname'} placeHolder={'Last name'} />
        <Input
          control={control}
          title={'Email Address'}
          placeHolder={'Email Address'}
        />
        <Input
          control={control}
          title={'Mobile Number'}
          placeHolder={'Mobile Number'}
        />
        <Input control={control} title={'Password'} placeHolder={'Password'} />
        <Input
          control={control}
          title={'Confirm Password'}
          placeHolder={' Confirm Password'}
        />
        {/* <CheckBox/> */}
        <Button title="Sign Up (Agent)" />
        <Text style={tw('self-center text-lg py-1')}>Or</Text>
        <Button
          title="Sign in with Google"
          style=" bg-neutral-200"
          textStyle="text-black"
        />
        <View style={tw('flex-row items-center gap-2 self-center')}>
          <Text style={tw('text-lg self-center text-center')}>
            Already have an Account?
          </Text>
          <TouchableOpacity style={tw('items-center ')}>
            <Text style={tw('text-lg self-center text-center text-purple-400')}>
              login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
