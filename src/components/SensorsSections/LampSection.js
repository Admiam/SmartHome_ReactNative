import React, {useState, useEffect} from 'react';
//import lampData from '../../data/lampData';
import Lamp from '../Sensors/sensorLamp';
import {FlatGrid} from 'react-native-super-grid';
import {DataStore} from 'aws-amplify';
import {CreateLamp} from '../../models';

const LampSection = () => {
  const [lampData, setLampData] = useState([]);

  //const fetchLamp = async () => {
  //const result = await DataStore.query(CreateLamp);
  //setLampData(result);
  useEffect(() => {
    DataStore.query(CreateLamp).then(setLampData);

    const subscription = DataStore.observeQuery(CreateLamp).subscribe(
      snapshot => {
        const {items, isSynced} = snapshot;
        setLampData(items);
      },
    );
    return function cleanup() {
      subscription.unsubscribe();
    };
  }, []);
  return (
    <FlatGrid
      itemDimension={130}
      data={lampData}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({item}) => <Lamp lampItem={item} />}
    />
  );
};

export default LampSection;
