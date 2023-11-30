import { TestBed } from '@angular/core/testing';

import { LoginParService } from './login-par.service';

describe('LoginParService', () => {
  let service: LoginParService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginParService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
