import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import Input from '../../../components/Input';
import {useForm} from 'react-hook-form';
import Button from '../../../components/buttons/Button';

export default function NewAccountAgent() {
  const {control} = useForm();

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
  let onSubmit = data => {
    return console.log(data);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={formData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contentContainer}
        removeClippedSubviews={true} // Optimize performance
        ListHeaderComponent={
          <>
            <Text style={styles.title}>Create an Agent Account</Text>
          </>
        }
        ListFooterComponent={
          <>
            <Button
              title="Sign Up (Agent)"
              onPress={async () => {
                let resp = await control.handleSubmit(onSubmit)();
              }}
              style="mt-4"
            />
            <Text style={styles.orText}>Or</Text>
            <Button
              title="Sign in with Google"
              style="bg-neutral-200"
              textStyle="text-black"
            />
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Already have an Account?</Text>
              <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>
            </View>
          </>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    marginVertical: 8,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
  },
  orText: {
    alignSelf: 'center',
    fontSize: 18,
    paddingVertical: 4,
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    gap: 8,
    marginTop: 8,
  },
  loginText: {
    fontSize: 18,
    textAlign: 'center',
  },
  loginButtonText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#7C3AED', // Purple-400 equivalent
  },
});
