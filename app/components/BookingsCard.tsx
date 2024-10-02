import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {tw} from '../utils/utils';

export default function BookingsCard() {
  return (
    <TouchableOpacity style={tw('h-[120px] w-full flex-row bg-neutral-700 gap-2 my-1 rounded-md')}>
      <View style={tw('h-full aspect-square bg-emerald-700 rounded-md')}></View>
      <View style={tw("justify-between py-1")}>
        <Text style={tw('text-xl')}>Student Hostel</Text>
        <Text style={tw(' ')} numberOfLines={1}>
          112, University Road, Akoka
        </Text>
        <Text style={tw('text-xl')}>N100,000</Text>
        <View style={tw('flex-row justify-between')}>
          <Text style={tw('')}>per annum</Text>
          <Text style={tw('')}>communal</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
