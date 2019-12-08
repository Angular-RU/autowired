import { Injectable } from '@angular/core';

@Injectable()
export class FeatureService {
  public invoke() {
    console.log('looks good');
    return 'world';
  }
}
