"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const testing_1 = require("@angular/core/testing");
const autowired_1 = require("@angular-ru/autowired");
require("reflect-metadata");
describe('Simple usage @Autowired', () => {
    it('should be correct ensure service', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        let AppService = class AppService {
            get name() {
                return 'appName';
            }
        };
        AppService = tslib_1.__decorate([
            core_1.Injectable()
        ], AppService);
        let AppComponent = class AppComponent {
            appRef() {
                return this.app;
            }
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
        yield testing_1.TestBed.configureTestingModule({
            declarations: [AppComponent],
            providers: [AppService]
        }).compileComponents();
        const app = testing_1.TestBed.createComponent(AppComponent);
        console.log('app', app.componentInstance.appRef());
    }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3NwbGluY29kZS9Eb3dubG9hZHMvRGV2ZWxvcC9hdXRvd2lyZWQvcHJvamVjdHMvYXV0b3dpcmVkL3Rlc3RzL3NpbXBsZS5zcGVjLnRzIiwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFzRDtBQUN0RCxtREFBZ0Q7QUFDaEQscURBQWtEO0FBRWxELDRCQUEwQjtBQUUxQixRQUFRLENBQUMseUJBQXlCLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRSxHQUFTLEVBQUU7UUFFaEQsSUFBTSxVQUFVLEdBQWhCLE1BQU0sVUFBVTtZQUNkLElBQVcsSUFBSTtnQkFDYixPQUFPLFNBQVMsQ0FBQztZQUNuQixDQUFDO1NBQ0YsQ0FBQTtRQUpLLFVBQVU7WUFEZixpQkFBVSxFQUFFO1dBQ1AsVUFBVSxDQUlmO1FBTUQsSUFBTSxZQUFZLEdBQWxCLE1BQU0sWUFBWTtZQUdULE1BQU07Z0JBQ1gsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ2xCLENBQUM7U0FDRixDQUFBO1FBTGM7WUFBWixxQkFBUyxFQUFFOzhDQUFhLFVBQVU7aURBQUM7UUFEaEMsWUFBWTtZQUpqQixnQkFBUyxDQUFDO2dCQUNULFFBQVEsRUFBRSxLQUFLO2dCQUNmLFFBQVEsRUFBRSxFQUFFO2FBQ2IsQ0FBQztXQUNJLFlBQVksQ0FNakI7UUFFRCxNQUFNLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQzVCLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQztTQUN4QixDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUV2QixNQUFNLEdBQUcsR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL3NwbGluY29kZS9Eb3dubG9hZHMvRGV2ZWxvcC9hdXRvd2lyZWQvcHJvamVjdHMvYXV0b3dpcmVkL3Rlc3RzL3NpbXBsZS5zcGVjLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBBdXRvd2lyZWQgfSBmcm9tICdAYW5ndWxhci1ydS9hdXRvd2lyZWQnO1xuXG5pbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xuXG5kZXNjcmliZSgnU2ltcGxlIHVzYWdlIEBBdXRvd2lyZWQnLCAoKSA9PiB7XG4gIGl0KCdzaG91bGQgYmUgY29ycmVjdCBlbnN1cmUgc2VydmljZScsIGFzeW5jICgpID0+IHtcbiAgICBASW5qZWN0YWJsZSgpXG4gICAgY2xhc3MgQXBwU2VydmljZSB7XG4gICAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdhcHBOYW1lJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAQ29tcG9uZW50KHtcbiAgICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICAgIHRlbXBsYXRlOiAnJ1xuICAgIH0pXG4gICAgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICAgIEBBdXRvd2lyZWQoKSBwdWJsaWMgYXBwOiBBcHBTZXJ2aWNlO1xuXG4gICAgICBwdWJsaWMgYXBwUmVmKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcHA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXdhaXQgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgIGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudF0sXG4gICAgICBwcm92aWRlcnM6IFtBcHBTZXJ2aWNlXVxuICAgIH0pLmNvbXBpbGVDb21wb25lbnRzKCk7XG5cbiAgICBjb25zdCBhcHAgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChBcHBDb21wb25lbnQpO1xuICAgIGNvbnNvbGUubG9nKCdhcHAnLCBhcHAuY29tcG9uZW50SW5zdGFuY2UuYXBwUmVmKCkpO1xuICB9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9