import {Text, Pressable, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('window');

const ColorButton = ({onPress, color, colorTitle, title}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, {backgroundColor: color}]}>
      <Text style={[styles.text, {color: colorTitle}]}>{title}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    height: 50,
    width: width - 40,
    borderRadius: 10,
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
export default ColorButton;
