import {View, Text, TouchableOpacity, FlatList} from 'react-native';
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
  const navigation = useNavigation();

  const onSubmit = data => {
    navigation.navigate('VerifyEmail');
    // console.log(data.Terms)
    return data;
  };

  // Data array for FlatList
  const formData = [
    {id: '1', title: 'Firstname', placeHolder: 'First name'},
    {id: '2', title: 'Lastname', placeHolder: 'Last name'},
    {id: '3', title: 'Email Address', placeHolder: 'Email Address'},
    {id: '4', title: 'Mobile Number', placeHolder: 'Mobile Number'},
    {id: '5', title: 'Password', placeHolder: 'Password'},
    {id: '6', title: 'Confirm Password', placeHolder: 'Confirm Password'},
  ];

  // Render function for FlatList items
  const renderItem = ({item}) => (
    <Input
      control={control}
      title={item.title}
      placeHolder={item.placeHolder}
    />
  );

  return (
    <View style={{flex: 1}}>
      <Header />
      <FlatList
        data={formData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={tw('gap-2 px-4')}
        ListHeaderComponent={
          <>
            <Text style={tw('my-2 self-center text-center text-xl')}>
              Create a Renter Account
            </Text>
          </>
        }
        ListFooterComponent={
          <>
            <View style={tw("my-2")}>
              <View style={tw('flex-row gap-2 items-center')}>
                <MyCheckbox title={'Student'} control={control} />
                <Text>Are you a student</Text>
              </View>
              <View style={tw('flex-row gap-2 items-center')}>
                <MyCheckbox title={'Terms'} control={control} />
                <Text>You have read terms and conditions</Text>
              </View>
            </View>
            <Button
              title="Sign Up (Renter)"
              onPress={async () => {
                await handleSubmit(onSubmit)();
              }}
            />
            <Text style={tw('self-center text-lg py-1')}>Or</Text>
            <Button
              title="Sign in with Google"
              style="bg-neutral-200"
              textStyle="text-black"
            />
            <View style={tw('flex-row items-center gap-2 self-center')}>
              <Text style={tw('text-lg self-center text-center')}>
                Already have an Account?
              </Text>
              <TouchableOpacity style={tw('items-center ')}>
                <Text
                  style={tw('text-lg self-center text-center text-purple-400')}>
                  login
                </Text>
              </TouchableOpacity>
            </View>
          </>
        }
      />
    </View>
  );
}
