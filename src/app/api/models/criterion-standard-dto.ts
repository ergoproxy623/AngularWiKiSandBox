/* tslint:disable */
import { CriterionDTO } from './criterion-dto';
import { ActivityDTO } from './activity-dto';
export interface CriterionStandardDTO extends CriterionDTO{
  activities?: Array<ActivityDTO>;
  criterionId?: number;
  enabled?: boolean;
  hasSubCriteria?: boolean;
  iconUrl?: string;
  ordinal?: number;
  title?: string;
}
