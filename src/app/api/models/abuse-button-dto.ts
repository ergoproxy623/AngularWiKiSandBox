/* tslint:disable */
export interface AbuseButtonDTO {
  buttonType?: 'CANCEL' | 'RESOLVE' | 'REQUEST_CHANGES' | 'RESTRICT' | 'ABUSE_RESTRICT' | 'ABUSE_PROCESSING' | 'ABUSE_RESOLVE' | 'DELETE' | 'EDIT';
  enabled?: boolean;
  status?: string;
  style?: string;
  title?: string;
}
