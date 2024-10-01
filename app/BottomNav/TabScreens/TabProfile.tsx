import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, tw} from '../../utils/utils';
import {
  IconBookmark,
  IconEdit,
  IconHistory,
  IconLock,
} from '@tabler/icons-react-native';
import Button from '../../components/buttons/Button';

export default function TabProfile() {
  return (
    <View style={{flex: 1}}>
      <View style={tw(' items-center enter flex-1')}>
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
          <TouchableOpacity style={tw('flex-row items-center ')}>
            <IconEdit size={32} color={colors.neutral[400]} />
            <Text style={tw('text-lg')}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={tw('flex-row items-center gap-2')}>
            <IconBookmark size={32} color={colors.neutral[400]} />
            <Text style={tw('text-lg')}>Booking history</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw('flex-row items-center gap-2')}>
            <IconHistory size={32} color={colors.neutral[400]} />
            <Text style={tw('text-lg')}>Transaction History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw('flex-row items-center gap-2')}>
            <IconLock size={32} color={colors.neutral[400]} />
            <Text style={tw('text-lg')}>Change Password</Text>
          </TouchableOpacity>
          <Button title="Logout" />
        </View>
      </View>
    </View>
  );
}
