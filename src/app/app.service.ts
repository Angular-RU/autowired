import { Injectable } from '@angular/core';
import { Autowired, ServiceScan } from '@angular-ru/autowired';
import { AnyService } from './any.service';

@ServiceScan()
@Injectable()
export class AppService {
  @Autowired() public my: AnyService;

  public hello(): string {
    return this.my.title;
  }
}
