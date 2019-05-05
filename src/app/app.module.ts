import { BrowserModule } from '@angular/platform-browser';
import { BeanAccessibleModule } from '@angular-ru/autowired';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppService } from './app.service';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BeanAccessibleModule.forRoot()
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
