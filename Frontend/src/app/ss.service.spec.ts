import { TestBed } from '@angular/core/testing';

import { SsService } from './ss.service';

describe('SsService', () => {
  let service: SsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
