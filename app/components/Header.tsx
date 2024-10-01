import {View, Text} from 'react-native';
import React from 'react';
import { tw } from '../utils/utils';

export default function Header() {
  return (
    <View style={tw('self-center py-2')}>
      <Text style={tw('text-3xl')}>RentIT</Text>
    </View>
  );
}
