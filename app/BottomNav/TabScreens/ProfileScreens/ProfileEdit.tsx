import {View, Text} from 'react-native';
import React from 'react';
import {tw} from '../../../utils/utils';
import Input from '../../../components/Input';
import {useForm} from 'react-hook-form';
import Button from '../../../components/buttons/Button';

export default function ProfileEdit() {
  let profileItems = [{}];
  let {control} = useForm();
  return (
    <View style={tw('flex-1')}>
      <View style={tw('px-4 gap-1')}>
        <View
          style={tw(
            'h-18 aspect-square rounded-full bg-red-200 self-center',
          )}></View>
        <Input control={control} title="FirstName" placeHolder="FirstName" />
        <Input control={control} title="LastName" placeHolder="LastName" />
        <Input control={control} title="Email" placeHolder="Email" />
        <Input control={control} title="Mobile" placeHolder="Mobile" />
        <Button title="Save Changes" style="mt-2" />
      </View>
    </View>
  );
}
