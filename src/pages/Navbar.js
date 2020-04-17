import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default Navbar = ({title}) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc'
  },
  title: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
