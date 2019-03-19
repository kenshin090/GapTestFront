import { TestBed } from '@angular/core/testing';

import { CoveragesService } from './coverages.service';

describe('CoveragesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoveragesService = TestBed.get(CoveragesService);
    expect(service).toBeTruthy();
  });
});
