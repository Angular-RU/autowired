"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
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
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3NwbGluY29kZS9Eb3dubG9hZHMvRGV2ZWxvcC9hdXRvd2lyZWQvcHJvamVjdHMvYXV0b3dpcmVkL3Rlc3RzL3NpbXBsZS5zcGVjLnRzIiwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFzRDtBQUl0RCxRQUFRLENBQUMseUJBQXlCLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRSxHQUFHLEVBQUU7UUFFMUMsSUFBTSxVQUFVLEdBQWhCLE1BQU0sVUFBVTtZQUNkLElBQVcsSUFBSTtnQkFDYixPQUFPLFNBQVMsQ0FBQztZQUNuQixDQUFDO1NBQ0YsQ0FBQTtRQUpLLFVBQVU7WUFEZixpQkFBVSxFQUFFO1dBQ1AsVUFBVSxDQUlmO0lBRUgsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvc3BsaW5jb2RlL0Rvd25sb2Fkcy9EZXZlbG9wL2F1dG93aXJlZC9wcm9qZWN0cy9hdXRvd2lyZWQvdGVzdHMvc2ltcGxlLnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZXN0QmVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IEF1dG93aXJlZCB9IGZyb20gJ0Bhbmd1bGFyLXJ1L2F1dG93aXJlZCc7XG5cbmRlc2NyaWJlKCdTaW1wbGUgdXNhZ2UgQEF1dG93aXJlZCcsICgpID0+IHtcbiAgaXQoJ3Nob3VsZCBiZSBjb3JyZWN0IGVuc3VyZSBzZXJ2aWNlJywgKCkgPT4ge1xuICAgIEBJbmplY3RhYmxlKClcbiAgICBjbGFzcyBBcHBTZXJ2aWNlIHtcbiAgICAgIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ2FwcE5hbWUnO1xuICAgICAgfVxuICAgIH1cblxuICB9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9