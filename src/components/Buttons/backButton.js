import {StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../styles';
//import Icon from 'react-native-vector-icons/Feather';
import {Button} from 'react-native-paper';

const GoBack = ({onPress}) => {
  return (
    <Button
      icon={require('../../../assets/icons/leftArrow.png')}
      mode="text"
      color={colors.white}
      uppercase={false}
      onPress={onPress}
      style={styles.button}>
      Zpět
    </Button>
  );
};
//<Icon name="arrow-left-outline" size={30} color="white" style={Text} />
const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    marginLeft: 10,
    maxWidth: 100,
    fontSize: 14,
  },
  text: {},
});

export default GoBack;

/**
 * <svg width="180" height="114" viewBox="0 0 180 114" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 10C0 4.47715 4.47715 0 10 0H170C175.523 0 180 4.47715 180 10V104C180 109.523 175.523 114 170 114H10C4.47716 114 0 109.523 0 104V10Z" fill="#3B3B74"/>
</svg>

 */
