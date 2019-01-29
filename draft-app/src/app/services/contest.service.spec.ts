/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContestService } from './contest.service';

describe('ContestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContestService]
    });
  });

  it('should ...', inject([ContestService], (service: ContestService) => {
    expect(service).toBeTruthy();
  }));
});
