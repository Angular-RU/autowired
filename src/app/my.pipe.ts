import { Pipe, PipeTransform } from '@angular/core';
import { Autowired } from '@angular-ru/autowired';
import { AppService } from './app.service';

@Pipe({ name: 'myPipe' })
export class MyPipe implements PipeTransform {
  @Autowired() app: AppService;

  public transform(value: any): any {
    return value + '::pipe(' + this.app.hello() + ')';
  }
}
