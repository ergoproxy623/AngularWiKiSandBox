/* tslint:disable */
import { UnreadMessageCountByChatId } from './unread-message-count-by-chat-id';
export interface Notification {
  totalUnreadMessage?: number;
  unreadByChats?: Array<UnreadMessageCountByChatId>;
}
