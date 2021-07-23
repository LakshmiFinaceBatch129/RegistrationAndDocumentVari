import { TestBed } from '@angular/core/testing';

import { ReService } from './re.service';

describe('ReService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReService = TestBed.get(ReService);
    expect(service).toBeTruthy();
  });
});
