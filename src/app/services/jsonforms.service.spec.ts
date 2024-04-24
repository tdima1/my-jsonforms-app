import { TestBed } from '@angular/core/testing';

import { JsonformsService } from './jsonforms.service';

describe('JsonformsService', () => {
  let service: JsonformsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonformsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
