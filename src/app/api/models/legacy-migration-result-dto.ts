/* tslint:disable */
import { AtomicInteger } from './atomic-integer';
export interface LegacyMigrationResultDTO {
  activeEmployeesCount?: AtomicInteger;
  activeJobAdsCount?: AtomicInteger;
  activeUsersCount?: AtomicInteger;
  details?: string;
  error?: string;
  fileName?: string;
  inactiveEmployeesCount?: AtomicInteger;
  inactiveJobAdsCount?: AtomicInteger;
  nonLoggedUsersCount?: AtomicInteger;
  obsoleteJobAdsCount?: AtomicInteger;
  session?: string;
  totalJobAdsCount?: AtomicInteger;
  totalUsersCount?: AtomicInteger;
}
