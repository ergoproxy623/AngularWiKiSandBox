/* tslint:disable */
import { AbuseActionLogDTO } from './abuse-action-log-dto';
import { AbuseButtonDTO } from './abuse-button-dto';
import { StatusDTO } from './status-dto';
export interface AbuseExtendedDTO {
  abuseMessage?: string;
  actionLogs?: Array<AbuseActionLogDTO>;
  advertisementId?: number;
  advertisementType?: 'EMPLOYEE' | 'JOB_AD' | 'UNDEFINED';
  buttons?: Array<AbuseButtonDTO>;
  chatId?: number;
  created?: string;
  disputableText?: string;
  id?: number;
  latestVersion?: string;
  ownerEmail?: string;
  ownerFirstName?: string;
  ownerId?: number;
  ownerLastName?: string;
  reporter?: string;
  source?: StatusDTO;
  status?: StatusDTO;
}
