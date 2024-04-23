import {View, StyleSheet, TouchableOpacity, Animated, Text} from 'react-native';
import React from 'react';
import TemperatureHumiditySection from '../components/SensorsSections/TemperatureHumiditySection';
import LampSection from '../components/SensorsSections/LampSection';
import {TabView, SceneMap} from 'react-native-tab-view';
import {colors} from '../styles';

const FirstRoute = () => <TemperatureHumiditySection />;

const SecondRoute = () => <LampSection />;

export default class TopTabs extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'first', title: 'Teplota'},
      {key: 'second', title: 'Lampa'},
    ],
  };

  _handleIndexChange = index => this.setState({index});

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(inputIndex =>
              inputIndex === i ? 1 : 0.5,
            ),
          });

          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({index: i})}>
              <Animated.Text style={{opacity}}>
                <Text style={styles.title}>{route.title}</Text>
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: 0,
  },
  title: {
    color: colors.white,
    fontSize: 16,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
    padding: 10,
  },
});
