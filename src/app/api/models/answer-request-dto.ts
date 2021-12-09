/* tslint:disable */
export interface AnswerRequestDto {
  answerId?: number;
  created?: number;
  selected?: boolean;
  type?: 'checkbox' | 'text';
  value?: string;
}
