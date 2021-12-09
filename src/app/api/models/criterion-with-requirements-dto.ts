/* tslint:disable */
import { RequirementDTO } from './requirement-dto';
export interface CriterionWithRequirementsDTO {
  criterionId?: number;
  enabled?: boolean;
  iconUrl?: string;
  requirements?: Array<RequirementDTO>;
  title?: string;
}
