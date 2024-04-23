import {Pressable, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {colors} from '../../styles';
const {width} = Dimensions.get('window');

const SubmitButton = ({onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>Submit</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primaryLight,
    borderRadius: 10,
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: width - 40,
  },
  text: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default SubmitButton;
