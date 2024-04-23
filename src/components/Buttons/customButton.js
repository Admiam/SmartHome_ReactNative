import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import {colors} from '../../styles';

const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 10,
  },
  container_PRIMARY: {
    backgroundColor: colors.primaryLight,
  },
  container_SECOND: {
    borderColor: colors.secondaryLight,
    borderWidth: 2,
  },
  container_THIRD: {},
  text: {
    fontWeight: 'bold',
    color: colors.white,
  },
  text_SECOND: {
    color: colors.secondaryLight,
  },
  text_THIRD: {
    color: colors.grey,
  },
});
export default CustomButton;
