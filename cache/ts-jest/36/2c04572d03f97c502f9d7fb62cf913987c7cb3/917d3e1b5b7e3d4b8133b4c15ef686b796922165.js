"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const testing_1 = require("@angular/core/testing");
const autowired_1 = require("@angular-ru/autowired");
require("reflect-metadata");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3NwbGluY29kZS9Eb3dubG9hZHMvRGV2ZWxvcC9hdXRvd2lyZWQvcHJvamVjdHMvYXV0b3dpcmVkL3Rlc3RzL3NpbXBsZS5zcGVjLnRzIiwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFzRDtBQUN0RCxtREFBZ0Q7QUFDaEQscURBQWtEO0FBRWxELDRCQUEwQjtBQUUxQixRQUFRLENBQUMseUJBQXlCLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRSxHQUFHLEVBQUU7UUFFMUMsSUFBTSxVQUFVLEdBQWhCLE1BQU0sVUFBVTtZQUNkLElBQVcsSUFBSTtnQkFDYixPQUFPLFNBQVMsQ0FBQztZQUNuQixDQUFDO1NBQ0YsQ0FBQTtRQUpLLFVBQVU7WUFEZixpQkFBVSxFQUFFO1dBQ1AsVUFBVSxDQUlmO1FBTUQsSUFBTSxZQUFZLEdBQWxCLE1BQU0sWUFBWTtTQUVqQixDQUFBO1FBRGM7WUFBWixxQkFBUyxFQUFFOzhDQUFhLFVBQVU7aURBQUM7UUFEaEMsWUFBWTtZQUpqQixnQkFBUyxDQUFDO2dCQUNULFFBQVEsRUFBRSxLQUFLO2dCQUNmLFFBQVEsRUFBRSxFQUFFO2FBQ2IsQ0FBQztXQUNJLFlBQVksQ0FFakI7UUFFRCxpQkFBTyxDQUFDLHNCQUFzQixDQUFDO1lBQzdCLFlBQVksRUFBRSxDQUFDLFlBQVksQ0FBQztZQUM1QixTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7U0FDeEIsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFdkIsTUFBTSxHQUFHLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL3NwbGluY29kZS9Eb3dubG9hZHMvRGV2ZWxvcC9hdXRvd2lyZWQvcHJvamVjdHMvYXV0b3dpcmVkL3Rlc3RzL3NpbXBsZS5zcGVjLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBBdXRvd2lyZWQgfSBmcm9tICdAYW5ndWxhci1ydS9hdXRvd2lyZWQnO1xuXG5pbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xuXG5kZXNjcmliZSgnU2ltcGxlIHVzYWdlIEBBdXRvd2lyZWQnLCAoKSA9PiB7XG4gIGl0KCdzaG91bGQgYmUgY29ycmVjdCBlbnN1cmUgc2VydmljZScsICgpID0+IHtcbiAgICBASW5qZWN0YWJsZSgpXG4gICAgY2xhc3MgQXBwU2VydmljZSB7XG4gICAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdhcHBOYW1lJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAQ29tcG9uZW50KHtcbiAgICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICAgIHRlbXBsYXRlOiAnJ1xuICAgIH0pXG4gICAgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICAgIEBBdXRvd2lyZWQoKSBwdWJsaWMgYXBwOiBBcHBTZXJ2aWNlO1xuICAgIH1cblxuICAgIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnRdLFxuICAgICAgcHJvdmlkZXJzOiBbQXBwU2VydmljZV1cbiAgICB9KS5jb21waWxlQ29tcG9uZW50cygpO1xuXG4gICAgY29uc3QgYXBwID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoQXBwQ29tcG9uZW50KTtcbiAgICBjb25zb2xlLmxvZyhhcHAuY29tcG9uZW50SW5zdGFuY2UuYXBwLm5hbWUpO1xuICB9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9