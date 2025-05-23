import { NetworkIdType } from '@sonarwatch/portfolio-core';
import { Cache } from './Cache';

export type JobExecutor = (cache: Cache) => Promise<void>;
export type JobLabel =
  | 'normal'
  | 'coingecko'
  | 'realtime'
  | 'evm'
  | NetworkIdType;
export type Job = {
  id: string;
  networkIds: Array<NetworkIdType | 'ALL'>;
  executor: JobExecutor;
  labels: JobLabel[];
};
