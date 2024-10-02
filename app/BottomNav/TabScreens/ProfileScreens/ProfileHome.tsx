import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  IconBookmark,
  IconEdit,
  IconHistory,
  IconLock,
} from '@tabler/icons-react-native';
import {colors, tw} from '../../../utils/utils';
import Button from '../../../components/buttons/Button';
import {useNavigation} from '@react-navigation/native';

export default function ProfileHome() {
  let navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={tw(' items-center flex-1')}>
        <View style={tw('items-center gap-1')}>
          <View
            style={tw(
              'h-40 aspect-square rounded-full border-red-200  bg-purple-200',
            )}></View>
          <Text style={tw('text-xl text-center')}>Dummy JonDoe</Text>
          <Text style={tw('text-lg opacity-70 text-center')}>
            Aderinke02@gmail.com
          </Text>
        </View>

        <View style={tw('w-full px-6 mt-4 justify-evenly flex-1')}>
          <TouchableOpacity
            style={tw('flex-row items-center ')}
            onPress={() => {
              navigation.navigate('ProfileEdit');
            }}>
            <IconEdit size={32} color={colors.neutral[400]} />
            <Text style={tw('text-lg')}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw('flex-row items-center gap-2')}
            onPress={() => {
              navigation.navigate('ProfileBookings');
            }}>
            <IconBookmark size={32} color={colors.neutral[400]} />
            <Text style={tw('text-lg')}>Booking history</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw('flex-row items-center gap-2')}
            onPress={() => {
              navigation.navigate('ProfileTransactions');
            }}>
            <IconHistory size={32} color={colors.neutral[400]} />
            <Text style={tw('text-lg')}>Transaction History</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw('flex-row items-center gap-2')}
            onPress={() => {
              navigation.navigate('ProfilePassword');
            }}>
            <IconLock size={32} color={colors.neutral[400]} />
            <Text style={tw('text-lg')}>Change Password</Text>
          </TouchableOpacity>
          <Button title="Logout" />
        </View>
      </View>
    </View>
  );
}
