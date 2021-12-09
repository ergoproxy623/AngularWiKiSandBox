/* tslint:disable */
import { AbuseSimplifiedDTO } from './abuse-simplified-dto';
import { Order } from './order';
export interface CommonPagedRestResponseAbuseSimplifiedDTO {
  content?: Array<AbuseSimplifiedDTO>;
  page?: number;
  size?: number;
  sortOrder?: Array<Order>;
  totalElements?: number;
  totalPages?: number;
}
