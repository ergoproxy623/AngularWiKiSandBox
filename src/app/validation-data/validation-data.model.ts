export interface ValidationData {
  errors: ValidationError[],
}

export interface ValidationError {
  errorType: string,
  message: string,
  row: number,
  sheetName: string,
  technicalFieldName: string,
}
