import { TimeoutDirective } from './timeout.directive';

describe('TimeoutDirective', () => {
  it('should create an instance', () => {
    const directive = new TimeoutDirective(undefined, undefined);
    expect(directive).toBeTruthy();
  });
});
