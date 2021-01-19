import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import CarItem from '../../components/CarItem';

const TeslaOne = () => {
  return (
    <View style={styles.container}>
      <CarItem />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default TeslaOne;
