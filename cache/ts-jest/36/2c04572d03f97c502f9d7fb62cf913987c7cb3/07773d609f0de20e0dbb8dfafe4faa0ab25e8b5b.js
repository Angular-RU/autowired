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
        console.log('app', app.componentInstance.app);
    }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3NwbGluY29kZS9Eb3dubG9hZHMvRGV2ZWxvcC9hdXRvd2lyZWQvcHJvamVjdHMvYXV0b3dpcmVkL3Rlc3RzL3NpbXBsZS5zcGVjLnRzIiwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFzRDtBQUN0RCxtREFBZ0Q7QUFDaEQscURBQWtEO0FBRWxELDRCQUEwQjtBQUUxQixRQUFRLENBQUMseUJBQXlCLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRSxHQUFTLEVBQUU7UUFFaEQsSUFBTSxVQUFVLEdBQWhCLE1BQU0sVUFBVTtZQUNkLElBQVcsSUFBSTtnQkFDYixPQUFPLFNBQVMsQ0FBQztZQUNuQixDQUFDO1NBQ0YsQ0FBQTtRQUpLLFVBQVU7WUFEZixpQkFBVSxFQUFFO1dBQ1AsVUFBVSxDQUlmO1FBTUQsSUFBTSxZQUFZLEdBQWxCLE1BQU0sWUFBWTtTQUVqQixDQUFBO1FBRGM7WUFBWixxQkFBUyxFQUFFOzhDQUFhLFVBQVU7aURBQUM7UUFEaEMsWUFBWTtZQUpqQixnQkFBUyxDQUFDO2dCQUNULFFBQVEsRUFBRSxLQUFLO2dCQUNmLFFBQVEsRUFBRSxFQUFFO2FBQ2IsQ0FBQztXQUNJLFlBQVksQ0FFakI7UUFFRCxNQUFNLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQzVCLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQztTQUN4QixDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUV2QixNQUFNLEdBQUcsR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcGxpbmNvZGUvRG93bmxvYWRzL0RldmVsb3AvYXV0b3dpcmVkL3Byb2plY3RzL2F1dG93aXJlZC90ZXN0cy9zaW1wbGUuc3BlYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRlc3RCZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgQXV0b3dpcmVkIH0gZnJvbSAnQGFuZ3VsYXItcnUvYXV0b3dpcmVkJztcblxuaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJztcblxuZGVzY3JpYmUoJ1NpbXBsZSB1c2FnZSBAQXV0b3dpcmVkJywgKCkgPT4ge1xuICBpdCgnc2hvdWxkIGJlIGNvcnJlY3QgZW5zdXJlIHNlcnZpY2UnLCBhc3luYyAoKSA9PiB7XG4gICAgQEluamVjdGFibGUoKVxuICAgIGNsYXNzIEFwcFNlcnZpY2Uge1xuICAgICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnYXBwTmFtZSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQENvbXBvbmVudCh7XG4gICAgICBzZWxlY3RvcjogJ2FwcCcsXG4gICAgICB0ZW1wbGF0ZTogJydcbiAgICB9KVxuICAgIGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgICBAQXV0b3dpcmVkKCkgcHVibGljIGFwcDogQXBwU2VydmljZTtcbiAgICB9XG5cbiAgICBhd2FpdCBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgICAgZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50XSxcbiAgICAgIHByb3ZpZGVyczogW0FwcFNlcnZpY2VdXG4gICAgfSkuY29tcGlsZUNvbXBvbmVudHMoKTtcblxuICAgIGNvbnN0IGFwcCA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KEFwcENvbXBvbmVudCk7XG4gICAgY29uc29sZS5sb2coJ2FwcCcsIGFwcC5jb21wb25lbnRJbnN0YW5jZS5hcHApO1xuICB9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9