/* tslint:disable */
export interface AppSettingDTO {
  constraintType?: 'NONE' | 'NUMBER' | 'TEXT' | 'DATE' | 'INTEGER' | 'BOOLEAN';
  defaultValue?: string;
  measureUnit?: string;
  paramLocalTitle?: string;
  paramName?: string;
  paramTitle?: string;
  value?: string;
}
