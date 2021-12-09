/* tslint:disable */
import { ChatMessageActionDto } from './chat-message-action-dto';
import { ChatMessageAttachmentDto } from './chat-message-attachment-dto';
export interface ChatMessageDto {
  actions?: Array<ChatMessageActionDto>;
  attachments?: Array<ChatMessageAttachmentDto>;
  chatId?: number;
  createdAt?: string;
  id?: number;
  message?: string;
  recipientId?: number;
  recipientName?: string;
  senderId?: number;
  senderName?: string;
  status?: 'DELIVERED' | 'VIEWED' | 'SENT' | 'FAILED';
}
