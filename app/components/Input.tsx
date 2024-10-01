import {useController} from 'react-hook-form';
import {Text, TextInput, View} from 'react-native';
import {tw} from '../utils/utils';
interface ISiginInput {
  title: string;
  placeHolder: string;
  control: any;
}
let Input = ({title, placeHolder, control}: ISiginInput) => {
  const {field} = useController({
    defaultValue: '',
    control,
    name: title,
  });
  return (
    <View style={tw('py-2 gap-1 ')}>
      <Text style={tw('text-lg')}>{title}</Text>
      <View
        style={tw('bg-neutral-800 rounded-md border border-neutral-600 px-1')}>
        <TextInput
          onChangeText={field.onChange}
          value={field.value}
          placeholder={placeHolder}
        />
      </View>
    </View>
  );
};

export default Input;
