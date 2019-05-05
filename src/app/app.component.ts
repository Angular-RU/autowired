import { Component, OnInit } from '@angular/core';
import { Autowired } from '@angular-ru/autowired';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Autowired() public app: AppService;

  public title = 'bean-autowired';

  public ngOnInit(): void {
    this.title = this.app.hello();
  }
}
