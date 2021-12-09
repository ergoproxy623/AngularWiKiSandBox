/* tslint:disable */
import { AbuseSourceTypeStatisticsDTO } from './abuse-source-type-statistics-dto';
import { PairStatisticsDTO } from './pair-statistics-dto';
export interface AbuseStatisticsDTO {
  adminAbuse?: AbuseSourceTypeStatisticsDTO;
  blacklist?: AbuseSourceTypeStatisticsDTO;
  periodStatistics?: PairStatisticsDTO;
  visitorAbuse?: AbuseSourceTypeStatisticsDTO;
}
