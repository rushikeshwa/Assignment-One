import { TestBed } from '@angular/core/testing';

import { StrapiTestService } from './strapi-test.service';

describe('StrapiTestService', () => {
  let service: StrapiTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrapiTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
