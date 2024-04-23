import React, {useState, useEffect} from 'react';
import SensorDHT from '../Sensors/DHT';
import {FlatGrid} from 'react-native-super-grid';
import {DataStore} from 'aws-amplify';
import {CreateDHT} from '../../models';
//import dhtData from '../../data/dhtData';
//import dhtData from '../../data/dhtData';
const TemperatureHumiditySection = () => {
  const [dhtData, setDHTData] = useState([]);
  useEffect(() => {
    DataStore.query(CreateDHT).then(setDHTData);

    const subscription = DataStore.observeQuery(CreateDHT).subscribe(
      snapshot => {
        const {items, isSynced} = snapshot;
        setDHTData(items);
      },
    );
    return function cleanup() {
      subscription.unsubscribe();
    };
  }, []);
  return (
    <FlatGrid
      itemDimension={130}
      data={dhtData}
      spacing={10}
      renderItem={({item}) => <SensorDHT dht={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default TemperatureHumiditySection;
