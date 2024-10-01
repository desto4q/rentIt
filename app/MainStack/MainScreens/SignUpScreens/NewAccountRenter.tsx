import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../../components/Header';
import {tw} from '../../../utils/utils';
import {useForm} from 'react-hook-form';
import Input from '../../../components/Input';
import Button from '../../../components/buttons/Button';
import MyCheckbox from '../../../components/MyCheckbox';
import {useNavigation} from '@react-navigation/native';
export default function NewAccountRenter() {
  const {control, handleSubmit} = useForm();
  let navigation: any = useNavigation();
  let onSubmit = (data: any) => {
    navigation.navigate('VerifyEmail');
    //  console.log(data.Terms)
    return data;
  };
  return (
    <View style={{flex: 1}}>
      <Header />
      <ScrollView
        style={tw('my-2 px-4 gap-2')}
        contentContainerStyle={tw('gap-2  ')}>
        <Text style={tw('my-2 self-center text-center text-xl')}>
          Create a Renter Account
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
        <View style={tw('flex-row gap-2 items-center')}>
          <MyCheckbox title={'Student'} control={control} />
          <Text>Are you a student</Text>
        </View>

        <View style={tw('flex-row gap-2 items-center')}>
          <MyCheckbox title={'Terms'} control={control} />
          <Text>You have read terms and conditions</Text>
        </View>
        <Button
          title="Sign Up (Renter)"
          onPress={async () => {
            let fun = await handleSubmit(onSubmit)();
          }}
        />
        <Text style={tw('self-center text-lg py-1')}>Or</Text>
        <Button
          title="Sign in with Google"
          style=" bg-neutral-200 "
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
