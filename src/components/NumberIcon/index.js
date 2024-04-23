import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../styles';
const NumberIcon = ({text, color}) => {
  return (
    <View style={styles.center}>
      <Svg width="22" height="22" viewBox="0 0 22 22">
        <Path
          d="M0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11V22H11C4.92487 22 0 17.0751 0 11Z"
          fill={color}
        />
        <Text style={styles.text}>{text}</Text>
      </Svg>
    </View>
  );
};
const styles = StyleSheet.create({
  circle: {
    marginRight: 10,
  },
  text: {
    color: colors.white,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  center: {
    alignItems: 'center',
    marginRight: 10,
  },
});

export default NumberIcon;
