"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inject_service_1 = require("../utils/inject-service");
const ensure_injectable_type_meta_1 = require("../utils/ensure-injectable-type-meta");
function Autowired() {
    return (target, key) => {
        let meta = ensure_injectable_type_meta_1.ensureInjectableTypeMeta(target);
        if (meta && meta.ɵfac) {
            // Note: AOT
            inject_service_1.injectService(target, key, meta);
        }
        else {
            Promise.resolve().then(() => {
                console.log('resolve');
                // Note: JIT
                meta = ensure_injectable_type_meta_1.ensureInjectableTypeMeta(target);
                inject_service_1.injectService(target, key, meta);
            });
        }
    };
}
exports.Autowired = Autowired;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3NwbGluY29kZS9Eb3dubG9hZHMvRGV2ZWxvcC9hdXRvd2lyZWQvcHJvamVjdHMvYXV0b3dpcmVkL3NyYy9saWIvZGVjb3JhdG9ycy9hdXRvd2lyZWQuZGVjb3JhdG9yLnRzIiwibWFwcGluZ3MiOiI7O0FBQ0EsNERBQXdEO0FBQ3hELHNGQUFnRjtBQUVoRixTQUFnQixTQUFTO0lBQ3ZCLE9BQU8sQ0FBQyxNQUFjLEVBQUUsR0FBUSxFQUFFLEVBQUU7UUFDbEMsSUFBSSxJQUFJLEdBQXNCLHNEQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRS9ELElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDckIsWUFBWTtZQUNaLDhCQUFhLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNsQzthQUFNO1lBQ0wsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7Z0JBQ3RCLFlBQVk7Z0JBQ1osSUFBSSxHQUFHLHNEQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4Qyw4QkFBYSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUMsQ0FBQztBQUNKLENBQUM7QUFoQkQsOEJBZ0JDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcGxpbmNvZGUvRG93bmxvYWRzL0RldmVsb3AvYXV0b3dpcmVkL3Byb2plY3RzL2F1dG93aXJlZC9zcmMvbGliL2RlY29yYXRvcnMvYXV0b3dpcmVkLmRlY29yYXRvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlTWV0YSwgS2V5IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnRlcm5hbHMnO1xuaW1wb3J0IHsgaW5qZWN0U2VydmljZSB9IGZyb20gJy4uL3V0aWxzL2luamVjdC1zZXJ2aWNlJztcbmltcG9ydCB7IGVuc3VyZUluamVjdGFibGVUeXBlTWV0YSB9IGZyb20gJy4uL3V0aWxzL2Vuc3VyZS1pbmplY3RhYmxlLXR5cGUtbWV0YSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBBdXRvd2lyZWQ8VCA9IGFueT4oKTogUHJvcGVydHlEZWNvcmF0b3Ige1xuICByZXR1cm4gKHRhcmdldDogT2JqZWN0LCBrZXk6IEtleSkgPT4ge1xuICAgIGxldCBtZXRhOiBJbmplY3RhYmxlTWV0YTxUPiA9IGVuc3VyZUluamVjdGFibGVUeXBlTWV0YSh0YXJnZXQpO1xuXG4gICAgaWYgKG1ldGEgJiYgbWV0YS7JtWZhYykge1xuICAgICAgLy8gTm90ZTogQU9UXG4gICAgICBpbmplY3RTZXJ2aWNlKHRhcmdldCwga2V5LCBtZXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXNvbHZlJylcbiAgICAgICAgLy8gTm90ZTogSklUXG4gICAgICAgIG1ldGEgPSBlbnN1cmVJbmplY3RhYmxlVHlwZU1ldGEodGFyZ2V0KTtcbiAgICAgICAgaW5qZWN0U2VydmljZSh0YXJnZXQsIGtleSwgbWV0YSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG4iXSwidmVyc2lvbiI6M30=