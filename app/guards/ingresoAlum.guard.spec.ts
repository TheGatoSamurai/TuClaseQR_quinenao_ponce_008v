import { TestBed } from '@angular/core/testing';

import { IngresoAGuard } from './ingresoAlum.guard';

describe('IngresoAGuard', () => {
  let guard: IngresoAGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IngresoAGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
