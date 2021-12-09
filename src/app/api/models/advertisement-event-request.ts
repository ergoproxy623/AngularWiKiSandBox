/* tslint:disable */
export interface AdvertisementEventRequest {
  eventType?: 'JOB_AD_ACTIVE_EVENT' | 'JOB_AD_RADAR_EVENT' | 'JOB_AD_INACTIVE_EVENT' | 'PROFILE_ACTIVE_EVENT' | 'PROFILE_INACTIVE_EVENT' | 'PROFILE_RADAR_EVENT' | 'DAILY_JOB_EVENT';
  identifier: string;
  userId: string;
}
