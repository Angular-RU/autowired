"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inject_service_1 = require("../utils/inject-service");
const ensure_injectable_type_meta_1 = require("../utils/ensure-injectable-type-meta");
function Autowired() {
    return (target, key) => {
        let meta = ensure_injectable_type_meta_1.ensureInjectableTypeMeta(target);
        console.dir('meta', meta);
        if (meta && meta.ɵfac) {
            // Note: AOT
            inject_service_1.injectService(target, key, meta);
        }
        else {
            Promise.resolve().then(() => {
                // Note: JIT
                meta = ensure_injectable_type_meta_1.ensureInjectableTypeMeta(target);
                inject_service_1.injectService(target, key, meta);
            });
        }
    };
}
exports.Autowired = Autowired;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3NwbGluY29kZS9Eb3dubG9hZHMvRGV2ZWxvcC9hdXRvd2lyZWQvcHJvamVjdHMvYXV0b3dpcmVkL3NyYy9saWIvZGVjb3JhdG9ycy9hdXRvd2lyZWQuZGVjb3JhdG9yLnRzIiwibWFwcGluZ3MiOiI7O0FBQ0EsNERBQXdEO0FBQ3hELHNGQUFnRjtBQUVoRixTQUFnQixTQUFTO0lBQ3ZCLE9BQU8sQ0FBQyxNQUFjLEVBQUUsR0FBUSxFQUFFLEVBQUU7UUFDbEMsSUFBSSxJQUFJLEdBQXNCLHNEQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ3JCLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDckIsWUFBWTtZQUNaLDhCQUFhLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNsQzthQUFNO1lBQ0wsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQzFCLFlBQVk7Z0JBQ1osSUFBSSxHQUFHLHNEQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4Qyw4QkFBYSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUMsQ0FBQztBQUNKLENBQUM7QUFmRCw4QkFlQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvc3BsaW5jb2RlL0Rvd25sb2Fkcy9EZXZlbG9wL2F1dG93aXJlZC9wcm9qZWN0cy9hdXRvd2lyZWQvc3JjL2xpYi9kZWNvcmF0b3JzL2F1dG93aXJlZC5kZWNvcmF0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZU1ldGEsIEtleSB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW50ZXJuYWxzJztcbmltcG9ydCB7IGluamVjdFNlcnZpY2UgfSBmcm9tICcuLi91dGlscy9pbmplY3Qtc2VydmljZSc7XG5pbXBvcnQgeyBlbnN1cmVJbmplY3RhYmxlVHlwZU1ldGEgfSBmcm9tICcuLi91dGlscy9lbnN1cmUtaW5qZWN0YWJsZS10eXBlLW1ldGEnO1xuXG5leHBvcnQgZnVuY3Rpb24gQXV0b3dpcmVkPFQgPSBhbnk+KCk6IFByb3BlcnR5RGVjb3JhdG9yIHtcbiAgcmV0dXJuICh0YXJnZXQ6IE9iamVjdCwga2V5OiBLZXkpID0+IHtcbiAgICBsZXQgbWV0YTogSW5qZWN0YWJsZU1ldGE8VD4gPSBlbnN1cmVJbmplY3RhYmxlVHlwZU1ldGEodGFyZ2V0KTtcbmNvbnNvbGUuZGlyKCdtZXRhJywgbWV0YSlcbiAgICBpZiAobWV0YSAmJiBtZXRhLsm1ZmFjKSB7XG4gICAgICAvLyBOb3RlOiBBT1RcbiAgICAgIGluamVjdFNlcnZpY2UodGFyZ2V0LCBrZXksIG1ldGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgLy8gTm90ZTogSklUXG4gICAgICAgIG1ldGEgPSBlbnN1cmVJbmplY3RhYmxlVHlwZU1ldGEodGFyZ2V0KTtcbiAgICAgICAgaW5qZWN0U2VydmljZSh0YXJnZXQsIGtleSwgbWV0YSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG4iXSwidmVyc2lvbiI6M30=