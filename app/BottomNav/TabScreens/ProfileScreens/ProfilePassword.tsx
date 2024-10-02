import {View, Text} from 'react-native';
import React from 'react';
import {tw} from '../../../utils/utils';
import Input from '../../../components/Input';
import {useForm} from 'react-hook-form';
import Button from '../../../components/buttons/Button';

export default function ProfilePassword() {
  let profileItems = [{}];
  let {control} = useForm();
  return (
    <View style={tw('flex-1')}>
      <View style={tw('px-4 gap-1')}>
        <Input control={control} title="Current Password" placeHolder="" />
        <Input control={control} title="New Password" placeHolder="" />
        <Input control={control} title="Confirm New Password" placeHolder="" />
        <Button title="Reset Password" style="mt-2" />
        <Button title="Forget Password  " style="mt-2 bg-transparent items-center border border-neutral-500" />
      </View>
    </View>
  );
}
