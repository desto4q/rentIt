import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {useController} from 'react-hook-form';

interface ICheckbox {
  title: string;
  control: any;
}

export default function MyCheckbox({title, control}: ICheckbox) {
  const {field} = useController({
    name: title,
    control,
    defaultValue: false, // Default value is false
  });
  useEffect(() => {
    console.log(field.value);
  }, []);
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <CheckBox
        value={field.value} // Use the field value from useController
        onValueChange={field.onChange} // Update the state on value change
      />
    </View>
  );
}
