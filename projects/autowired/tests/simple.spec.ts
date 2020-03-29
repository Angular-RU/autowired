import { Component, Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Autowired } from '@angular-ru/autowired';

import 'reflect-metadata';

describe('Simple usage @Autowired', () => {
  it('should be correct ensure service', async (done) => {
    @Injectable({providedIn:'root'})
    class AppService {
      public get name(): string {
        return 'appName';
      }
    }

    @Component({
      selector: 'app',
      template: ''
    })
    class AppComponent {
      @Autowired() public app: AppService;

      public appRef() {
        return this.app;
      }
    }

    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [AppService]
    }).compileComponents();

    const app = TestBed.createComponent(AppComponent);
    console.log('app', app.componentInstance.appRef());

    setTimeout(() => {
      done()
    }, 4000)
  });
});
