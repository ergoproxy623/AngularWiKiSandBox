export interface ValidationDataDto {
  errors: ValidationErrorDto[],
}

export interface ValidationErrorDto {
  errorType: string,
  message: string,
  row: number,
  sheetName: string,
  technicalFieldName: string,
}
