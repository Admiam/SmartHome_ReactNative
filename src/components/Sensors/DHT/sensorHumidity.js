import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Amplify from 'aws-amplify';
import awsmobile from '../../../aws-exports';

import {PubSub} from 'aws-amplify';
import {AWSIoTProvider} from '@aws-amplify/pubsub/lib/Providers';
import {colors} from '../../../styles';
Amplify.configure(awsmobile);
//Auth.currentCredentials().then(creds => console.log(creds));

// Apply plugin with configuration
Amplify.addPluggable(
  new AWSIoTProvider({
    aws_pubsub_region: 'eu-central-1',
    aws_pubsub_endpoint:
      'wss://a311s9u24xexzs-ats.iot.eu-central-1.amazonaws.com/mqtt',
  }),
);

class Humidity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      humidityMsg: '{"null": 0}',
    };
  }

  componentDidMount() {
    PubSub.subscribe(`device/${this.props.name}/data`).subscribe({
      next: data => {
        try {
          this.setState({humidityMsg: data.value});
          //console.log(data.value);
        } catch (error) {
          console.warn('Error, are you sending the correct data?');
        }
      },
      error: error => console.warn(error),
      close: () => console.log('Done'),
    });
  }
  render() {
    const {humidityMsg} = this.state;
    let humidityData = humidityMsg.DHTHumidity;

    if (!humidityData) {
      humidityData = 0;
    }
    return (
      <View>
        <Text style={styles.text}>{humidityData}%</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: colors.white,
    fontWeight: '500',
  },
});

export default Humidity;
//$ aws iot attach-principal-policy --policy-name 'PubSub_policy' --principal 'eu-central-1:99044ddd-508c-4e5c-9e4d-9731a2d77466'
