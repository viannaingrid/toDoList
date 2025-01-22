import { TestBed } from '@angular/core/testing';

import { LocalStoreageService } from './local-storeage.service';

describe('LocalStoreageService', () => {
  let service: LocalStoreageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStoreageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
