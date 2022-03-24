import { Injectable } from '@angular/core';

@Injectable()
export class TestService {
  constructor(private t2: TestService2) {}
  public getMessage(name: string): string {
    return 'Ciao ' + name;
  }
}

@Injectable()
export class TestService2 {}
