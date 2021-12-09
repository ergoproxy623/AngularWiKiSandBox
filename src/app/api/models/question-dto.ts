/* tslint:disable */
import { AnswerDto } from './answer-dto';
export interface QuestionDto {
  answers?: Array<AnswerDto>;
  created?: number;
  enabled?: boolean;
  id?: number;
  title?: string;
}
