
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface MobileDetailScreenProps { }

const MobileDetailScreen = (props: MobileDetailScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>MobileDetailScreen</Text>
    </View>
  );
};

export default MobileDetailScreen;

const styles = StyleSheet.create({
  container: {},
});
