import { Injectable } from '@angular/core';
import { Autowired } from '@angular-ru/autowired';
import { AnyService } from './any.service';

@Injectable()
export class AppService {
  @Autowired() public my: AnyService;

  public hello(): string {
    return this.my.title;
  }
}
