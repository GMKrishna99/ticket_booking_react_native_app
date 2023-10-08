/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { Text, View, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import { COLORS } from '../theme/theme';

interface HomeScreenProps { }

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { navigation.push('MoveDetails'); }}>
        <Text> HomeScreen</Text>
      </TouchableOpacity>
    </View >
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: COLORS.Black,
  },
});
