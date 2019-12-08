import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { AnyService } from './any.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MyPipe } from './my.pipe';

@NgModule({
  declarations: [AppComponent, MyPipe],
  imports: [BrowserModule, FormsModule, AppRoutingModule, BrowserAnimationsModule],
  bootstrap: [AppComponent],
  providers: [AppService, AnyService]
})
export class AppModule {}
