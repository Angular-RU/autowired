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
    }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3NwbGluY29kZS9Eb3dubG9hZHMvRGV2ZWxvcC9hdXRvd2lyZWQvcHJvamVjdHMvYXV0b3dpcmVkL3Rlc3RzL3NpbXBsZS5zcGVjLnRzIiwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFzRDtBQUN0RCxtREFBZ0Q7QUFDaEQscURBQWtEO0FBRWxELDRCQUEwQjtBQUUxQixRQUFRLENBQUMseUJBQXlCLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRSxHQUFTLEVBQUU7UUFFaEQsSUFBTSxVQUFVLEdBQWhCLE1BQU0sVUFBVTtZQUNkLElBQVcsSUFBSTtnQkFDYixPQUFPLFNBQVMsQ0FBQztZQUNuQixDQUFDO1NBQ0YsQ0FBQTtRQUpLLFVBQVU7WUFEZixpQkFBVSxDQUFDLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxDQUFDO1dBQzFCLFVBQVUsQ0FJZjtRQU1ELElBQU0sWUFBWSxHQUFsQixNQUFNLFlBQVk7WUFHVCxNQUFNO2dCQUNYLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNsQixDQUFDO1NBQ0YsQ0FBQTtRQUxjO1lBQVoscUJBQVMsRUFBRTs4Q0FBYSxVQUFVO2lEQUFDO1FBRGhDLFlBQVk7WUFKakIsZ0JBQVMsQ0FBQztnQkFDVCxRQUFRLEVBQUUsS0FBSztnQkFDZixRQUFRLEVBQUUsRUFBRTthQUNiLENBQUM7V0FDSSxZQUFZLENBTWpCO1FBRUQsTUFBTSxpQkFBTyxDQUFDLHNCQUFzQixDQUFDO1lBQ25DLFlBQVksRUFBRSxDQUFDLFlBQVksQ0FBQztZQUM1QixTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7U0FDeEIsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFdkIsTUFBTSxHQUFHLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcGxpbmNvZGUvRG93bmxvYWRzL0RldmVsb3AvYXV0b3dpcmVkL3Byb2plY3RzL2F1dG93aXJlZC90ZXN0cy9zaW1wbGUuc3BlYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRlc3RCZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgQXV0b3dpcmVkIH0gZnJvbSAnQGFuZ3VsYXItcnUvYXV0b3dpcmVkJztcblxuaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJztcblxuZGVzY3JpYmUoJ1NpbXBsZSB1c2FnZSBAQXV0b3dpcmVkJywgKCkgPT4ge1xuICBpdCgnc2hvdWxkIGJlIGNvcnJlY3QgZW5zdXJlIHNlcnZpY2UnLCBhc3luYyAoKSA9PiB7XG4gICAgQEluamVjdGFibGUoe3Byb3ZpZGVkSW46J3Jvb3QnfSlcbiAgICBjbGFzcyBBcHBTZXJ2aWNlIHtcbiAgICAgIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ2FwcE5hbWUnO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBDb21wb25lbnQoe1xuICAgICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgICAgdGVtcGxhdGU6ICcnXG4gICAgfSlcbiAgICBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgICAgQEF1dG93aXJlZCgpIHB1YmxpYyBhcHA6IEFwcFNlcnZpY2U7XG5cbiAgICAgIHB1YmxpYyBhcHBSZWYoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhd2FpdCBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgICAgZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50XSxcbiAgICAgIHByb3ZpZGVyczogW0FwcFNlcnZpY2VdXG4gICAgfSkuY29tcGlsZUNvbXBvbmVudHMoKTtcblxuICAgIGNvbnN0IGFwcCA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KEFwcENvbXBvbmVudCk7XG4gICAgY29uc29sZS5sb2coJ2FwcCcsIGFwcC5jb21wb25lbnRJbnN0YW5jZS5hcHBSZWYoKSk7XG4gIH0pO1xufSk7XG4iXSwidmVyc2lvbiI6M30=