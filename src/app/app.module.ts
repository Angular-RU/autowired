import { BrowserModule } from '@angular/platform-browser';
import { BeanAccessibleModule } from '@angular-ru/autowired';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeatureModule } from "./feature/feature.module";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BeanAccessibleModule.forRoot(),
    FeatureModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
