import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native-ui-lib';

import ForestCard from './DashBoard/ForestsCard';

export default () => {
  return (
    <View flex centerH>
      <Text blue40 text20 style={styles.marginTop5pc}>Dashboard</Text>
      <ForestCard />

    </View>
  );
}

const styles = StyleSheet.create({
  marginTop5pc: {
    marginTop: "5%"
  }
})