/* tslint:disable */
import { SubCriterionDTO } from './sub-criterion-dto';
export interface SubCriterionStandardDTO extends SubCriterionDTO{
  criterionId?: number;
  enabled?: boolean;
  iconUrl?: string;
  id?: number;
  ordinal?: number;
  selected?: boolean;
  subCriterionId?: number;
  title?: string;
}
