import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  public hello(): string {
    return 'world';
  }
}
