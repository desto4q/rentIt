import {View, Text} from 'react-native';
import React from 'react';
import BookingsCard from '../../../components/BookingsCard';
import {FlatList} from 'react-native-gesture-handler';

let arr = new Array(10).fill((i: any) => {
  return `${i}`;
});
let renderItem = (i: any) => <BookingsCard key={i} />;
export default function ProfileBookings() {
  return (
    <FlatList data={arr} renderItem={renderItem} style={{flex: 1}}></FlatList>
  );
}
