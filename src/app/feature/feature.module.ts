import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppService} from "./app.service";

@NgModule({
  providers: [AppService],
  imports: [
    CommonModule
  ]
})
export class FeatureModule { }
