import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Autowired, ServiceScan } from '@angular-ru/autowired';
import { AppService } from './app.service';

@ServiceScan()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Autowired() public app: AppService;
  @Autowired() public cd: ChangeDetectorRef;

  public title = '';

  public ngOnInit(): void {
    this.title = this.app.hello();
  }
}
