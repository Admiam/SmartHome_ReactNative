import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../styles';
const NotificationMsg = () => {
  return (
    <View style={styles.row}>
      <View>
        <Text style={styles.message}>Notification</Text>
        <Text style={styles.time}>Now</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  message: {
    color: colors.white,
    fontSize: 14,
  },
  time: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '500',
  },
});

export default NotificationMsg;
