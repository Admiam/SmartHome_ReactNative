import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import tinycolor from 'tinycolor2';
import {colors} from './../styles';
import GoBack from './../components/Buttons/backButton';
import {DataStore} from 'aws-amplify';
import {useRoute, useNavigation} from '@react-navigation/native';
import {CreateLamp} from '../models';
import ColorButton from './../components/Buttons/colorButton';
const LampScreen = () => {
  const navigation = useNavigation();
  const [lamp, setLamp] = useState({
    id: '',
    lampTitle: '',
    red: '',
    green: '',
    blue: '',
  });
  const route = useRoute();

  useEffect(() => {
    if (!route.params?.id) {
      return;
    }
    DataStore.query(CreateLamp, route.params.id).then(setLamp);
  }, [route.params?.id]);

  async function setRed(item) {
    let color = tinycolor('#ff0000').toRgbString();
    let sep = color.indexOf(',') > -1 ? ',' : ' ';
    color = color.substr(4).split(')')[0].split(sep);
    await DataStore.save(
      CreateLamp.copyOf(lamp, item => {
        item.red = color[0];
        item.green = color[1];
        item.blue = color[2];
      }),
    );
    navigation.navigate('home');
  }
  async function setSalmon(item) {
    let color = tinycolor('#f97979').toRgbString();
    let sep = color.indexOf(',') > -1 ? ',' : ' ';
    color = color.substr(4).split(')')[0].split(sep);
    await DataStore.save(
      CreateLamp.copyOf(lamp, item => {
        item.red = color[0];
        item.green = color[1];
        item.blue = color[2];
      }),
    );
    navigation.navigate('home');
  }
  async function setOrange(item) {
    let color = tinycolor('#f68933').toRgbString();
    let sep = color.indexOf(',') > -1 ? ',' : ' ';
    color = color.substr(4).split(')')[0].split(sep);
    await DataStore.save(
      CreateLamp.copyOf(lamp, item => {
        item.red = color[0];
        item.green = color[1];
        item.blue = color[2];
      }),
    );
    navigation.navigate('home');
  }
  async function setPeach(item) {
    let color = tinycolor('#feb983').toRgbString();
    let sep = color.indexOf(',') > -1 ? ',' : ' ';
    color = color.substr(4).split(')')[0].split(sep);
    await DataStore.save(
      CreateLamp.copyOf(lamp, item => {
        item.red = color[0];
        item.green = color[1];
        item.blue = color[2];
      }),
    );
    navigation.navigate('home');
  }
  async function setYellow(item) {
    let color = tinycolor('#ffff00').toRgbString();
    let sep = color.indexOf(',') > -1 ? ',' : ' ';
    color = color.substr(4).split(')')[0].split(sep);
    await DataStore.save(
      CreateLamp.copyOf(lamp, item => {
        item.red = color[0];
        item.green = color[1];
        item.blue = color[2];
      }),
    );
    navigation.navigate('home');
  }
  async function setGold(item) {
    let color = tinycolor('#ffd700').toRgbString();
    let sep = color.indexOf(',') > -1 ? ',' : ' ';
    color = color.substr(4).split(')')[0].split(sep);
    await DataStore.save(
      CreateLamp.copyOf(lamp, item => {
        item.red = color[0];
        item.green = color[1];
        item.blue = color[2];
      }),
    );
    navigation.navigate('home');
  }
  async function setGreen(item) {
    let color = tinycolor('#00ff00').toRgbString();
    let sep = color.indexOf(',') > -1 ? ',' : ' ';
    color = color.substr(4).split(')')[0].split(sep);
    await DataStore.save(
      CreateLamp.copyOf(lamp, item => {
        item.red = color[0];
        item.green = color[1];
        item.blue = color[2];
      }),
    );
    navigation.navigate('home');
  }
  async function setLime(item) {
    let color = tinycolor('#a2ff00').toRgbString();
    let sep = color.indexOf(',') > -1 ? ',' : ' ';
    color = color.substr(4).split(')')[0].split(sep);
    await DataStore.save(
      CreateLamp.copyOf(lamp, item => {
        item.red = color[0];
        item.green = color[1];
        item.blue = color[2];
      }),
    );
    navigation.navigate('home');
  }
  async function setBlue(item) {
    let color = tinycolor('#0096ff').toRgbString();
    let sep = color.indexOf(',') > -1 ? ',' : ' ';
    color = color.substr(4).split(')')[0].split(sep);
    await DataStore.save(
      CreateLamp.copyOf(lamp, item => {
        item.red = color[0];
        item.green = color[1];
        item.blue = color[2];
      }),
    );
    navigation.navigate('home');
  }
  async function setCyan(item) {
    let color = tinycolor('#00ffff').toRgbString();
    let sep = color.indexOf(',') > -1 ? ',' : ' ';
    color = color.substr(4).split(')')[0].split(sep);
    await DataStore.save(
      CreateLamp.copyOf(lamp, item => {
        item.red = color[0];
        item.green = color[1];
        item.blue = color[2];
      }),
    );
    navigation.navigate('home');
  }
  async function setPurple(item) {
    let color = tinycolor('#984ef6').toRgbString();
    let sep = color.indexOf(',') > -1 ? ',' : ' ';
    color = color.substr(4).split(')')[0].split(sep);
    await DataStore.save(
      CreateLamp.copyOf(lamp, item => {
        item.red = color[0];
        item.green = color[1];
        item.blue = color[2];
      }),
    );
    navigation.navigate('home');
  }
  async function setPink(item) {
    let color = tinycolor('#fd6cc9').toRgbString();
    let sep = color.indexOf(',') > -1 ? ',' : ' ';
    color = color.substr(4).split(')')[0].split(sep);
    await DataStore.save(
      CreateLamp.copyOf(lamp, item => {
        item.red = color[0];
        item.green = color[1];
        item.blue = color[2];
      }),
    );
    navigation.navigate('home');
  }
  return (
    <SafeAreaView style={styles.container}>
      <GoBack onPress={() => navigation.navigate('home')} />
      <ScrollView>
        <View style={styles.text}>
          <Text style={styles.title}>Výběr barvy</Text>
          <Text style={styles.subTitle}>{lamp.lampTitle}</Text>
        </View>
        <View>
          <ColorButton
            onPress={() => {
              setRed(lamp);
            }}
            color={'#ff0000'}
            colorTitle={'#f68686'}
            title={'Červená'}
          />
          <ColorButton
            onPress={() => {
              setSalmon(lamp);
            }}
            color={'#f97979'}
            colorTitle={'#fcdada'}
            title={'Lososová'}
          />
          <ColorButton
            onPress={() => {
              setOrange(lamp);
            }}
            color={'#f68933'}
            colorTitle={'#fac296'}
            title={'Oranžová'}
          />
          <ColorButton
            onPress={() => {
              setPeach(lamp);
            }}
            color={'#feb983'}
            colorTitle={'#ffe9d8'}
            title={'Broskvová'}
          />
          <ColorButton
            onPress={() => {
              setYellow(lamp);
            }}
            color={'#ffff00'}
            colorTitle={'#bbbb06'}
            title={'Žlutá'}
          />
          <ColorButton
            onPress={() => {
              setGold(lamp);
            }}
            color={'#ffd700'}
            colorTitle={'#f7f3db'}
            title={'Zlatá'}
          />
          <ColorButton
            onPress={() => {
              setGreen(lamp);
            }}
            color={'#00ff00'}
            colorTitle={'#d0fbd0'}
            title={'Zelená'}
          />
          <ColorButton
            onPress={() => {
              setLime(lamp);
            }}
            color={'#a2ff00'}
            colorTitle={'#f5fee6'}
            title={'Limetková'}
          />
          <ColorButton
            onPress={() => {
              setBlue(lamp);
            }}
            color={'#0096ff'}
            colorTitle={'#95d0f9'}
            title={'Modrá'}
          />
          <ColorButton
            onPress={() => {
              setCyan(lamp);
            }}
            color={'#00ffff'}
            colorTitle={'#defbfb'}
            title={'Tyrkysová'}
          />
          <ColorButton
            onPress={() => {
              setPurple(lamp);
            }}
            color={'#984ef6'}
            colorTitle={'#e6d3ff'}
            title={'Fialová'}
          />
          <ColorButton
            onPress={() => {
              setPink(lamp);
            }}
            color={'#fd6cc9'}
            colorTitle={'#fdd5ee'}
            title={'Růžová'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    alignItems: 'center',
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 24,
  },
  subTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '500',
  },
  button: {
    height: 50,
    width: Dimensions.get('window').width - 40,
    borderRadius: 20,
    justifyContent: 'center',
    marginVertical: 10,
  },
});

export default LampScreen;
