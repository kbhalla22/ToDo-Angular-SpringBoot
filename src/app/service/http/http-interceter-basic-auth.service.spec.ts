import { TestBed } from '@angular/core/testing';

import { HttpInterceterBasicAuthService } from './http-interceter-basic-auth.service';

describe('HttpInterceterBasicAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpInterceterBasicAuthService = TestBed.get(HttpInterceterBasicAuthService);
    expect(service).toBeTruthy();
  });
});
