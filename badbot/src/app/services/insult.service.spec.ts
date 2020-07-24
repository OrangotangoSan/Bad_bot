import { TestBed } from '@angular/core/testing';

import { InsultService } from './insult.service';

describe('InsultService', () => {
  let service: InsultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
