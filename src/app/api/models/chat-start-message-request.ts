/* tslint:disable */
export interface ChatStartMessageRequest {
  activities?: string;
  message?: string;
  recipientId?: number;
  referenceId?: number;
  referenceType?: 'EMPLOYEE' | 'JOB_AD' | 'UNDEFINED';
  topic?: string;
}
