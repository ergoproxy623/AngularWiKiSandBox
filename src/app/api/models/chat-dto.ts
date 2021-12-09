/* tslint:disable */
import { ChatMessageDto } from './chat-message-dto';
export interface ChatDTO {
  active?: boolean;
  activities?: string;
  archive?: boolean;
  chatIconType?: 'MyOrder' | 'MyEmployee' | 'AnotherOrder' | 'AnotherEmployee';
  chatId?: number;
  countUnreadMessages?: number;
  created?: string;
  lastMessage?: ChatMessageDto;
  referenceId?: number;
  referenceType?: 'EMPLOYEE' | 'JOB_AD' | 'UNDEFINED';
  topic?: string;
  updated?: string;
}
