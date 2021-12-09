/* tslint:disable */
export interface AbuseCommandRequest {
  abuseId: number;
  message?: string;
  status: 'REPORTED' | 'CANCELLED' | 'REQUIRED_CHANGES' | 'REQUESTED_APPROVAL' | 'RESOLVED' | 'DELETED';
}
