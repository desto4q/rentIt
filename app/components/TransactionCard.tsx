import {View, Text} from 'react-native';
import React from 'react';
import {tw} from '../utils/utils';

export default function TransactionCard() {
  return (
    <View
      style={tw(
        'w-full justify-between h-[68px] flex-row p-2 rounded-md bg-neutral-800 my-1',
      )}>
      <View style={tw('w-3/5 h-full justify-evenly ')}>
        <Text style={tw('w-full text-lg')} numberOfLines={1}>
          2 Bedroom flat,33 adenkule road inyanno paja sadsaadnsasdasda
          dasdasdas
        </Text>
        <Text style={tw('w-full opacity-65')} numberOfLines={1}>
          5th sept, 2024, 01:07AM
        </Text>
      </View>
      <View style={tw(' h-full  ml-auto justify-evenly')}>
        <Text>N300,000.000</Text>
        <Text style={tw("bg-emerald-300 text-center rounded-md text-emerald-950")}>successful</Text>
      </View>
    </View>
  );
}
