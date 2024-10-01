import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {tw} from '../../utils/utils';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';

export default function SignIn() {
  let navigate = useNavigation();
  return (
    <View style={tw('flex-1 px-2 gap-2')}>
      <Header />
      <View style={tw('h-2/6 my-auto ')}>
        <Image
          style={[tw('w-full h-full'),
            {
              objectFit:"contain"
            }
          ]}
          source={require('../../../assets/splash_1.png'  )}
        />
      </View>
      <View style={tw('mt-auto gap-4')}>
        <View style={tw('gap-2 ')}>
          <Text style={tw('uppercase text-xl')}>
            say goodbye to stressful house hunting
          </Text>
          <Text style={tw(' text-lg')}>
            Finding your perfect home just got easier.No More endless searches
            or missed oppourtunities. Start your journey today and discover a
            smarter way to find your next home.
          </Text>
        </View>
        <View style={tw(' mb-6 gap-4')}>
          <TouchableOpacity
            onPress={() => {
              // navigate.navigate('');
            }}
            style={tw('p-2 py-3 bg-purple-800 items-center rounded-md')}>
            <Text style={tw('text-lg')}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigate.navigate('AgentOrRenter');
            }}
            style={tw('p-2 py-3 items-center bg-blue-800 rounded-md')}>
            <Text style={tw('text-lg')}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
