// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CreateDHT, CreateLamp } = initSchema(schema);

export {
  CreateDHT,
  CreateLamp
};