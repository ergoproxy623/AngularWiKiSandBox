/* tslint:disable */
import { SubCriterionDTO } from './sub-criterion-dto';
import { ActivityDTO } from './activity-dto';
export interface SubCriterionExtendedDTO extends SubCriterionDTO{
  activities?: Array<ActivityDTO>;
  criterionId?: number;
  enabled?: boolean;
  iconUrl?: string;
  id?: number;
  ordinal?: number;
  selected?: boolean;
  subCriterionId?: number;
  title?: string;
}
