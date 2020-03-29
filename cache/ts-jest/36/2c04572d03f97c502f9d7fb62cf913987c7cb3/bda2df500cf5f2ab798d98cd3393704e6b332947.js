"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const testing_1 = require("@angular/core/testing");
const autowired_1 = require("@angular-ru/autowired");
require("reflect-metadata");
describe('Simple usage @Autowired', () => {
    it('should be correct ensure service', (done) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        let AppService = class AppService {
            get name() {
                return 'appName';
            }
        };
        AppService = tslib_1.__decorate([
            core_1.Injectable({ providedIn: 'root' })
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
        setTimeout(() => {
            done();
        }, 5000);
    }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3NwbGluY29kZS9Eb3dubG9hZHMvRGV2ZWxvcC9hdXRvd2lyZWQvcHJvamVjdHMvYXV0b3dpcmVkL3Rlc3RzL3NpbXBsZS5zcGVjLnRzIiwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFzRDtBQUN0RCxtREFBZ0Q7QUFDaEQscURBQWtEO0FBRWxELDRCQUEwQjtBQUUxQixRQUFRLENBQUMseUJBQXlCLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRSxDQUFPLElBQUksRUFBRSxFQUFFO1FBRXBELElBQU0sVUFBVSxHQUFoQixNQUFNLFVBQVU7WUFDZCxJQUFXLElBQUk7Z0JBQ2IsT0FBTyxTQUFTLENBQUM7WUFDbkIsQ0FBQztTQUNGLENBQUE7UUFKSyxVQUFVO1lBRGYsaUJBQVUsQ0FBQyxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMsQ0FBQztXQUMxQixVQUFVLENBSWY7UUFNRCxJQUFNLFlBQVksR0FBbEIsTUFBTSxZQUFZO1lBR1QsTUFBTTtnQkFDWCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDbEIsQ0FBQztTQUNGLENBQUE7UUFMYztZQUFaLHFCQUFTLEVBQUU7OENBQWEsVUFBVTtpREFBQztRQURoQyxZQUFZO1lBSmpCLGdCQUFTLENBQUM7Z0JBQ1QsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsUUFBUSxFQUFFLEVBQUU7YUFDYixDQUFDO1dBQ0ksWUFBWSxDQU1qQjtRQUVELE1BQU0saUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxZQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDNUIsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO1NBQ3hCLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRXZCLE1BQU0sR0FBRyxHQUFHLGlCQUFPLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBRW5ELFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLEVBQUUsQ0FBQTtRQUNSLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNWLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvc3BsaW5jb2RlL0Rvd25sb2Fkcy9EZXZlbG9wL2F1dG93aXJlZC9wcm9qZWN0cy9hdXRvd2lyZWQvdGVzdHMvc2ltcGxlLnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZXN0QmVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IEF1dG93aXJlZCB9IGZyb20gJ0Bhbmd1bGFyLXJ1L2F1dG93aXJlZCc7XG5cbmltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XG5cbmRlc2NyaWJlKCdTaW1wbGUgdXNhZ2UgQEF1dG93aXJlZCcsICgpID0+IHtcbiAgaXQoJ3Nob3VsZCBiZSBjb3JyZWN0IGVuc3VyZSBzZXJ2aWNlJywgYXN5bmMgKGRvbmUpID0+IHtcbiAgICBASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjoncm9vdCd9KVxuICAgIGNsYXNzIEFwcFNlcnZpY2Uge1xuICAgICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnYXBwTmFtZSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQENvbXBvbmVudCh7XG4gICAgICBzZWxlY3RvcjogJ2FwcCcsXG4gICAgICB0ZW1wbGF0ZTogJydcbiAgICB9KVxuICAgIGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgICBAQXV0b3dpcmVkKCkgcHVibGljIGFwcDogQXBwU2VydmljZTtcblxuICAgICAgcHVibGljIGFwcFJlZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGF3YWl0IFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnRdLFxuICAgICAgcHJvdmlkZXJzOiBbQXBwU2VydmljZV1cbiAgICB9KS5jb21waWxlQ29tcG9uZW50cygpO1xuXG4gICAgY29uc3QgYXBwID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoQXBwQ29tcG9uZW50KTtcbiAgICBjb25zb2xlLmxvZygnYXBwJywgYXBwLmNvbXBvbmVudEluc3RhbmNlLmFwcFJlZigpKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZG9uZSgpXG4gICAgfSwgNTAwMClcbiAgfSk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==