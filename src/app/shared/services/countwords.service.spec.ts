import { TestBed } from '@angular/core/testing';

import { CountwordsService } from './countwords.service';

describe('CountwordsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountwordsService = TestBed.get(CountwordsService);
    expect(service).toBeTruthy();
  });
});
