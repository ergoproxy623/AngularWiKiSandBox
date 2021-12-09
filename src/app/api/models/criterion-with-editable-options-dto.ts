/* tslint:disable */
import { CriterionDTO } from './criterion-dto';
import { EditableOptionDTO } from './editable-option-dto';
export interface CriterionWithEditableOptionsDTO extends CriterionDTO{
  criterionId?: number;
  editableOptions?: Array<EditableOptionDTO>;
  enabled?: boolean;
  iconUrl?: string;
  title?: string;
}
