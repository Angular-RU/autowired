"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inject_service_1 = require("../utils/inject-service");
const ensure_injectable_type_meta_1 = require("../utils/ensure-injectable-type-meta");
function Autowired() {
    return (target, key) => {
        let meta = ensure_injectable_type_meta_1.ensureInjectableTypeMeta(target);
        console.log(meta);
        if (meta) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3NwbGluY29kZS9Eb3dubG9hZHMvRGV2ZWxvcC9hdXRvd2lyZWQvcHJvamVjdHMvYXV0b3dpcmVkL3NyYy9saWIvZGVjb3JhdG9ycy9hdXRvd2lyZWQuZGVjb3JhdG9yLnRzIiwibWFwcGluZ3MiOiI7O0FBQ0EsNERBQXdEO0FBQ3hELHNGQUFnRjtBQUVoRixTQUFnQixTQUFTO0lBQ3ZCLE9BQU8sQ0FBQyxNQUFjLEVBQUUsR0FBUSxFQUFFLEVBQUU7UUFDbEMsSUFBSSxJQUFJLEdBQXNCLHNEQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRS9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFakIsSUFBSSxJQUFJLEVBQUU7WUFDUixZQUFZO1lBQ1osOEJBQWEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2xDO2FBQU07WUFDTCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDMUIsWUFBWTtnQkFDWixJQUFJLEdBQUcsc0RBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3hDLDhCQUFhLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQWpCRCw4QkFpQkMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL3NwbGluY29kZS9Eb3dubG9hZHMvRGV2ZWxvcC9hdXRvd2lyZWQvcHJvamVjdHMvYXV0b3dpcmVkL3NyYy9saWIvZGVjb3JhdG9ycy9hdXRvd2lyZWQuZGVjb3JhdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGVNZXRhLCBLZXkgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2ludGVybmFscyc7XG5pbXBvcnQgeyBpbmplY3RTZXJ2aWNlIH0gZnJvbSAnLi4vdXRpbHMvaW5qZWN0LXNlcnZpY2UnO1xuaW1wb3J0IHsgZW5zdXJlSW5qZWN0YWJsZVR5cGVNZXRhIH0gZnJvbSAnLi4vdXRpbHMvZW5zdXJlLWluamVjdGFibGUtdHlwZS1tZXRhJztcblxuZXhwb3J0IGZ1bmN0aW9uIEF1dG93aXJlZDxUID0gYW55PigpOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gIHJldHVybiAodGFyZ2V0OiBPYmplY3QsIGtleTogS2V5KSA9PiB7XG4gICAgbGV0IG1ldGE6IEluamVjdGFibGVNZXRhPFQ+ID0gZW5zdXJlSW5qZWN0YWJsZVR5cGVNZXRhKHRhcmdldCk7XG5cbiAgICBjb25zb2xlLmxvZyhtZXRhKVxuXG4gICAgaWYgKG1ldGEpIHtcbiAgICAgIC8vIE5vdGU6IEFPVFxuICAgICAgaW5qZWN0U2VydmljZSh0YXJnZXQsIGtleSwgbWV0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAvLyBOb3RlOiBKSVRcbiAgICAgICAgbWV0YSA9IGVuc3VyZUluamVjdGFibGVUeXBlTWV0YSh0YXJnZXQpO1xuICAgICAgICBpbmplY3RTZXJ2aWNlKHRhcmdldCwga2V5LCBtZXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cbiJdLCJ2ZXJzaW9uIjozfQ==