import { Component, Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Autowired, enableInjectionTesting, ServiceScan } from '@angular-ru/autowired';

describe('Simple usage @Autowired', () => {
  // enableInjectionTesting(TestBed);

  it('should be correct ensure service', () => {
    @Injectable({ providedIn: 'root' })
    class AppService {
      public get name(): string {
        return 'appName';
      }
    }

    @ServiceScan()
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

    const app = TestBed.createComponent(AppComponent).componentInstance;
    console.log(app.app);

    // const app = TestBed.createComponent(AppComponent);
    // expect(app.componentInstance.appRef().name).toEqual('appName');
  });
});
