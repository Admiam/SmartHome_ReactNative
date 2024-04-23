import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Text,
} from 'react-native';

import {colors} from '../styles';
import {FAB, Portal, Provider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import TopTabs from '../router/topTabs';
const HomeScreen = () => {
  const navigation = useNavigation();
  const [state, setState] = React.useState({open: false});
  const onStateChange = ({open}) => setState({open});

  const {open} = state;

  return (
    <View style={styles.main}>
      <ImageBackground
        source={require('../../assets/images/darkHouse.png')}
        resizeMode="cover"
        style={styles.img}>
        <View style={styles.textImage}>
          <Text style={styles.hello} />
        </View>
      </ImageBackground>
      <View style={styles.sensors}>
        <TopTabs />
      </View>
      <Provider>
        <Portal>
          <FAB.Group
            style={styles.fab}
            open={open}
            icon={open ? 'close' : 'menu'}
            color={colors.white}
            labelTextColor="#58589F"
            fabStyle={{backgroundColor: colors.primaryLight}}
            actions={[
              {
                icon: 'cog',
                color: '#58589F',
                onPress: () => navigation.navigate('settings'),
                small: false,
              },
              {
                icon: 'plus',
                color: '#58589F',
                onPress: () => navigation.navigate('chooseSensor'),
                small: false,
              },
            ]}
            onStateChange={onStateChange}
          />
        </Portal>
      </Provider>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.background,
    height: Dimensions.get('window').height,
  },
  img: {
    justifyContent: 'flex-end',
    width: Dimensions.get('window').width,
    minHeight: '45%',
  },
  textImage: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  hello: {
    textAlign: 'center',
    color: colors.white,
    marginTop: 40,
    fontWeight: 'bold',
    fontSize: 24,
    // fontFamily: fonts.primaryBold,
  },
  tempTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '500',
  },
  sensors: {
    // justifyContent: 'space-evenly',
    //  flexWrap: 'wrap',
    //  alignItems: 'flex-start',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingVertical: 10,
  },
  lamp: {},
});
export default HomeScreen;
