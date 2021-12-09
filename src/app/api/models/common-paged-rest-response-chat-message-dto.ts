/* tslint:disable */
import { ChatMessageDto } from './chat-message-dto';
import { Order } from './order';
export interface CommonPagedRestResponseChatMessageDto {
  content?: Array<ChatMessageDto>;
  page?: number;
  size?: number;
  sortOrder?: Array<Order>;
  totalElements?: number;
  totalPages?: number;
}
