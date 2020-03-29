import { Component, Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Autowired } from '@angular-ru/autowired';

// @ts-ignore
describe('Simple usage @Autowired', () => {
  // @ts-ignore
  it('should be correct ensure service', () => {
    @Injectable({ providedIn: 'root' })
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

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [AppService]
    }).compileComponents();

    const app = TestBed.createComponent(AppComponent);
    console.log('app', app.componentInstance.appRef());
  });
});
