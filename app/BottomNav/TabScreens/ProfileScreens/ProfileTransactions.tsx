import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';
import TransactionCard from '../../../components/TransactionCard';
import {colors} from '../../../utils/utils';
import {IconFilter, IconSearch} from '@tabler/icons-react-native';

let arr = new Array(20).fill((i: any) => `${i}`);
let renderItem = (i: any) => <TransactionCard key={i} />;

export default function ProfileTransactions() {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.textInput} placeholder="Search" />
        <TouchableOpacity style={styles.iconButton}>
          <IconSearch color={colors.neutral[300]} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.filterButton}>
          <IconFilter color={colors.neutral[300]} />
        </TouchableOpacity>
      </View>
      <FlatList data={arr} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    gap: 16,
  },
  searchContainer: {
    padding: 8,
    borderWidth: 1,
    height: 56,
    flexDirection: 'row',
    borderColor: '#A3A3A3', // neutral-400 equivalent
    borderRadius: 8,
  },
  textInput: {
    flex: 1,
  },
  iconButton: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterButton: {
    padding: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#A3A3A3', // neutral-400 equivalent
    alignSelf: 'flex-start', // This ensures the button only takes up the necessary width
  },
});
