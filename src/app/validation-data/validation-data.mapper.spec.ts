import { TestBed } from '@angular/core/testing';
import { ValidationDataMapper } from './validation-data.mapper';
import {ValidationData} from './validation-data.model';
import * as fixture from './validation-data.mapper.spec.fixture';

describe('ProcessedDataMapper', () => {
  let sut: ValidationDataMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidationDataMapper],
    });
    sut = TestBed.inject(ValidationDataMapper);
  });

  it('should be created', () => {
    expect(sut).toBeTruthy();
  });

  describe('toValidationData()', () => {
    it('should return ValidationData', () => {
      const validationData: ValidationData = sut.toValidationData(fixture.validationDataDto);

      expect(validationData).toEqual(fixture.validationData);
    });
  });
});
