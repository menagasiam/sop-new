import { TestBed } from '@angular/core/testing';

import { MonitorListService } from './monitor-list.service';

describe('MonitorListService', () => {
  let service: MonitorListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonitorListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
