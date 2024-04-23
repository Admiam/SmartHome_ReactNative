import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CreateDHTMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CreateLampMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class CreateDHT {
  readonly id: string;
  readonly dhtID: string;
  readonly dhtTitle: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CreateDHT, CreateDHTMetaData>);
  static copyOf(source: CreateDHT, mutator: (draft: MutableModel<CreateDHT, CreateDHTMetaData>) => MutableModel<CreateDHT, CreateDHTMetaData> | void): CreateDHT;
}

export declare class CreateLamp {
  readonly id: string;
  readonly lampID: string;
  readonly lampTitle: string;
  readonly red?: string | null;
  readonly green?: string | null;
  readonly blue?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CreateLamp, CreateLampMetaData>);
  static copyOf(source: CreateLamp, mutator: (draft: MutableModel<CreateLamp, CreateLampMetaData>) => MutableModel<CreateLamp, CreateLampMetaData> | void): CreateLamp;
}