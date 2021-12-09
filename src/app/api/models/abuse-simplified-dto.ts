/* tslint:disable */
import { AbuseButtonDTO } from './abuse-button-dto';
import { StatusDTO } from './status-dto';
export interface AbuseSimplifiedDTO {
  abuseMessage?: string;
  advertisementId?: number;
  advertisementType?: 'EMPLOYEE' | 'JOB_AD' | 'UNDEFINED';
  buttons?: Array<AbuseButtonDTO>;
  chatId?: number;
  created?: string;
  disputableText?: string;
  id?: number;
  ownerId?: number;
  reporter?: string;
  source?: StatusDTO;
  status?: StatusDTO;
}
