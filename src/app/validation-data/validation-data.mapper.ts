import {Injectable} from "@angular/core";
import {ValidationDataDto} from "@app/file-upload/models/validation-data/validation-data.dto";
import {isEmptyDictionary} from "@app/shared/utils";
import {ValidationData} from "@app/file-upload/models/validation-data/validation-data.model";

@Injectable()
export class ValidationDataMapper {
  toValidationData(dto: ValidationDataDto): ValidationData {
    if (isEmptyDictionary(dto)) {
      return null;
    }

    const {errors} = dto;

    return {
      errors,
    };
  }
}
