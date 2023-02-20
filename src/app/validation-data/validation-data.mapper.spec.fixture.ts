import {ValidationDataDto} from "./validation-data.dto";
import {ValidationData} from "./validation-data.model";

export const validationDataDto: ValidationDataDto = {
  errors: [
    {
      errorType: 'error',
      message: 'error message',
      row: 1,
      sheetName: 'sheet',
      technicalFieldName: 'field_name'
    }
  ]
}

export const validationData: ValidationData = {
  errors: [
    {
      errorType: 'error',
      message: 'error message',
      row: 1,
      sheetName: 'sheet',
      technicalFieldName: 'field_name'
    }
  ]
}
