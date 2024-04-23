import {View, TextInput, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {colors} from '../../styles';

const CustomInput = ({
  value,
  setValue,
  maxLength,
  placeholder,
  keyboardType,
  onEndEditing,
  autoCapitalize,
  secureTextEntry,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor={colors.white}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
        maxLength={maxLength}
        selectionColor={colors.white}
        keyboardType={keyboardType}
        onEndEditing={onEndEditing}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    width: Dimensions.get('window').width - 40,
    padding: 15,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    color: colors.white,
  },
  input: {
    fontSize: 16,
    color: colors.white,
  },
});

export default CustomInput;
