import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Amplify from 'aws-amplify';
import awsmobile from '../../../aws-exports';

import {PubSub} from 'aws-amplify';
import {AWSIoTProvider} from '@aws-amplify/pubsub/lib/Providers';
import {colors} from '../../../styles';

Amplify.configure(awsmobile);

// Apply plugin with configuration
Amplify.addPluggable(
  new AWSIoTProvider({
    aws_pubsub_region: 'eu-central-1',
    aws_pubsub_endpoint:
      'wss://a311s9u24xexzs-ats.iot.eu-central-1.amazonaws.com/mqtt',
  }),
);

class DHTTemperature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature2Msg: '{"null": 0}',
    };
  }

  componentDidMount() {
    PubSub.subscribe(`device/${this.props.name}/data`).subscribe({
      next: data => {
        try {
          this.setState({temperature2Msg: data.value});
        } catch (error) {
          console.warn('Error, are you sending the correct data?');
        }
      },
      error: error => console.warn(error),
      close: () => console.log('Done'),
    });
  }

  render() {
    const {temperature2Msg} = this.state;
    let tempData = temperature2Msg.DHTTemperature;
    if (!tempData) {
      tempData = 0;
    }
    tempData = tempData.toFixed(1).replace(/\.?0+$/, '');
    return (
      <View>
        <Text style={styles.text}>{tempData}°</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    color: colors.white,
    fontWeight: '500',
  },
});

export default DHTTemperature;
//eu-central-1:70166295-b918-4b2d-a404-45573516d8ac
