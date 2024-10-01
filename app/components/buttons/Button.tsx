import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {tw} from '../../utils/utils';

export default function Button({
  title,
  style,
  onPress,
  textStyle,
}: {
  title: string;
  style?: string;
  textStyle?: string;
  onPress?: () => any;
}) {
  return (
      <TouchableOpacity
        onPress={() => {
          onPress && onPress();
        }}
        style={tw(
          `p-2 py-4 bg-purple-800 items-center justify-center rounded-md ${
            style && style
          }`,
        )}>
        <Text style={tw(`text-xl ${textStyle && textStyle}`)}>
          {title && title}
        </Text>
      </TouchableOpacity>
  );
}
