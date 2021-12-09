/* tslint:disable */
import { CriterionDTO } from './criterion-dto';
import { ActivityDTO } from './activity-dto';
import { EditableOptionDTO } from './editable-option-dto';
import { RequirementDTO } from './requirement-dto';
import { SubCriterionDTO } from './sub-criterion-dto';
export interface CriterionExtendedDTO extends CriterionDTO{
  activities?: Array<ActivityDTO>;
  ageLimits?: Array<string>;
  criterionId?: number;
  duplicatedOptionsAllowed?: boolean;
  editableOptions?: Array<EditableOptionDTO>;
  enabled?: boolean;
  hoursPerWeek?: Array<string>;
  iconUrl?: string;
  requirements?: Array<RequirementDTO>;
  subCriteria?: Array<SubCriterionDTO>;
  title?: string;
}
