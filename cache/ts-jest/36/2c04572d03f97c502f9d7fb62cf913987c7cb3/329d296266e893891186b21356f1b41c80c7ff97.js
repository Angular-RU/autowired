"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const testing_1 = require("@angular/core/testing");
const autowired_1 = require("@angular-ru/autowired");
describe('Simple usage @Autowired', () => {
    it('should be correct ensure service', () => {
        let AppService = class AppService {
            get name() {
                return 'appName';
            }
        };
        AppService = tslib_1.__decorate([
            core_1.Injectable()
        ], AppService);
        let AppComponent = class AppComponent {
        };
        tslib_1.__decorate([
            autowired_1.Autowired(),
            tslib_1.__metadata("design:type", AppService)
        ], AppComponent.prototype, "app", void 0);
        AppComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app',
                template: ''
            })
        ], AppComponent);
        testing_1.TestBed.configureTestingModule({
            declarations: [AppComponent],
            providers: [AppService]
        }).compileComponents();
        const app = testing_1.TestBed.createComponent(AppComponent);
        console.log(app.componentInstance.app.name);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3NwbGluY29kZS9Eb3dubG9hZHMvRGV2ZWxvcC9hdXRvd2lyZWQvcHJvamVjdHMvYXV0b3dpcmVkL3Rlc3RzL3NpbXBsZS5zcGVjLnRzIiwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFzRDtBQUN0RCxtREFBZ0Q7QUFDaEQscURBQWtEO0FBRWxELFFBQVEsQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLEVBQUU7SUFDdkMsRUFBRSxDQUFDLGtDQUFrQyxFQUFFLEdBQUcsRUFBRTtRQUUxQyxJQUFNLFVBQVUsR0FBaEIsTUFBTSxVQUFVO1lBQ2QsSUFBVyxJQUFJO2dCQUNiLE9BQU8sU0FBUyxDQUFDO1lBQ25CLENBQUM7U0FDRixDQUFBO1FBSkssVUFBVTtZQURmLGlCQUFVLEVBQUU7V0FDUCxVQUFVLENBSWY7UUFNRCxJQUFNLFlBQVksR0FBbEIsTUFBTSxZQUFZO1NBRWpCLENBQUE7UUFEYztZQUFaLHFCQUFTLEVBQUU7OENBQWEsVUFBVTtpREFBQztRQURoQyxZQUFZO1lBSmpCLGdCQUFTLENBQUM7Z0JBQ1QsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsUUFBUSxFQUFFLEVBQUU7YUFDYixDQUFDO1dBQ0ksWUFBWSxDQUVqQjtRQUVELGlCQUFPLENBQUMsc0JBQXNCLENBQUM7WUFDN0IsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQzVCLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQztTQUN4QixDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUV2QixNQUFNLEdBQUcsR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDN0MsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvc3BsaW5jb2RlL0Rvd25sb2Fkcy9EZXZlbG9wL2F1dG93aXJlZC9wcm9qZWN0cy9hdXRvd2lyZWQvdGVzdHMvc2ltcGxlLnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZXN0QmVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IEF1dG93aXJlZCB9IGZyb20gJ0Bhbmd1bGFyLXJ1L2F1dG93aXJlZCc7XG5cbmRlc2NyaWJlKCdTaW1wbGUgdXNhZ2UgQEF1dG93aXJlZCcsICgpID0+IHtcbiAgaXQoJ3Nob3VsZCBiZSBjb3JyZWN0IGVuc3VyZSBzZXJ2aWNlJywgKCkgPT4ge1xuICAgIEBJbmplY3RhYmxlKClcbiAgICBjbGFzcyBBcHBTZXJ2aWNlIHtcbiAgICAgIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ2FwcE5hbWUnO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBDb21wb25lbnQoe1xuICAgICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgICAgdGVtcGxhdGU6ICcnXG4gICAgfSlcbiAgICBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgICAgQEF1dG93aXJlZCgpIHB1YmxpYyBhcHA6IEFwcFNlcnZpY2U7XG4gICAgfVxuXG4gICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgIGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudF0sXG4gICAgICBwcm92aWRlcnM6IFtBcHBTZXJ2aWNlXVxuICAgIH0pLmNvbXBpbGVDb21wb25lbnRzKCk7XG5cbiAgICBjb25zdCBhcHAgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChBcHBDb21wb25lbnQpO1xuICAgIGNvbnNvbGUubG9nKGFwcC5jb21wb25lbnRJbnN0YW5jZS5hcHAubmFtZSlcbiAgfSk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==