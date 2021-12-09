/* tslint:disable */
export interface EditableOptionDTO {
  constraintType?: 'NONE' | 'NUMBER' | 'TEXT' | 'DATE' | 'INTEGER' | 'BOOLEAN';
  optionId?: number;
  optionType?: 'SELECT' | 'INPUT';
  title?: string;
}
