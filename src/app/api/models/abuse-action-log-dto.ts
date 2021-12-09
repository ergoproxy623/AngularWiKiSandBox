/* tslint:disable */
import { StatusDTO } from './status-dto';
export interface AbuseActionLogDTO {
  adminEmail?: string;
  adminMessage?: string;
  created?: string;
  ownerMessage?: string;
  statusAfter?: StatusDTO;
  statusBefore?: StatusDTO;
}
