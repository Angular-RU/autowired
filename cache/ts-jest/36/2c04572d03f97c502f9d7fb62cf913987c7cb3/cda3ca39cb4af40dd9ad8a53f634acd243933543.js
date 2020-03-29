"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const get_reflect_type_1 = require("./get-reflect-type");
function injectService(target, key, meta) {
    let localInjector;
    const name = key.toString();
    const cachedId = `#_${name}__service`;
    const classRef = get_reflect_type_1.getReflectType(target, key);
    console.log(0);
    if (meta) {
        const factory = meta.ɵfac;
        meta.ɵfac = () => {
            const instance = factory(target.constructor);
            localInjector = core_1.ɵɵdirectiveInject(core_1.INJECTOR);
            return instance;
        };
    }
    Object.defineProperties(target, {
        [cachedId]: {
            writable: true,
            enumerable: false,
            configurable: true
        },
        [name]: {
            enumerable: true,
            configurable: true,
            get() {
                console.log('fuck');
                if (this[cachedId]) {
                    return this[cachedId];
                }
                try {
                    console.log('localInjector', localInjector);
                    this[cachedId] = localInjector.get(classRef, null);
                    console.log(1, this[cachedId]);
                }
                catch (_a) {
                    //     this[cachedId] = directiveInject<T>(classRef);
                    console.log(2);
                }
                return this[cachedId];
            }
        }
    });
}
exports.injectService = injectService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3NwbGluY29kZS9Eb3dubG9hZHMvRGV2ZWxvcC9hdXRvd2lyZWQvcHJvamVjdHMvYXV0b3dpcmVkL3NyYy9saWIvdXRpbHMvaW5qZWN0LXNlcnZpY2UudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBK0Y7QUFFL0YseURBQW9EO0FBRXBELFNBQWdCLGFBQWEsQ0FBSSxNQUFjLEVBQUUsR0FBUSxFQUFFLElBQXVCO0lBQ2hGLElBQUksYUFBdUIsQ0FBQztJQUM1QixNQUFNLElBQUksR0FBVyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEMsTUFBTSxRQUFRLEdBQVcsS0FBSyxJQUFJLFdBQVcsQ0FBQztJQUM5QyxNQUFNLFFBQVEsR0FBZ0IsaUNBQWMsQ0FBSSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNmLElBQUksSUFBSSxFQUFFO1FBQ1IsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRTtZQUNmLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBa0IsQ0FBQyxDQUFDO1lBQ3BELGFBQWEsR0FBRyx3QkFBZSxDQUFDLGVBQVEsQ0FBQyxDQUFDO1lBQzFDLE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUMsQ0FBQztLQUNIO0lBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtRQUM5QixDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ1YsUUFBUSxFQUFFLElBQUk7WUFDZCxVQUFVLEVBQUUsS0FBSztZQUNqQixZQUFZLEVBQUUsSUFBSTtTQUNuQjtRQUNELENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDTixVQUFVLEVBQUUsSUFBSTtZQUNoQixZQUFZLEVBQUUsSUFBSTtZQUNsQixHQUFHO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUNsQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDdkI7Z0JBRUQsSUFBSTtvQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQTtvQkFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUksUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDaEM7Z0JBQUMsV0FBTTtvQkFDWCxxREFBcUQ7b0JBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2hCO2dCQUVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3hCLENBQUM7U0FDRjtLQUNGLENBQUMsQ0FBQztBQUNMLENBQUM7QUEzQ0Qsc0NBMkNDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcGxpbmNvZGUvRG93bmxvYWRzL0RldmVsb3AvYXV0b3dpcmVkL3Byb2plY3RzL2F1dG93aXJlZC9zcmMvbGliL3V0aWxzL2luamVjdC1zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElOSkVDVE9SLCBJbmplY3RvciwgVHlwZSwgybXJtWRpcmVjdGl2ZUluamVjdCBhcyBkaXJlY3RpdmVJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENsYXNzUmVmLCBJbmplY3RhYmxlTWV0YSwgS2V5IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnRlcm5hbHMnO1xuaW1wb3J0IHsgZ2V0UmVmbGVjdFR5cGUgfSBmcm9tICcuL2dldC1yZWZsZWN0LXR5cGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5qZWN0U2VydmljZTxUPih0YXJnZXQ6IE9iamVjdCwga2V5OiBLZXksIG1ldGE6IEluamVjdGFibGVNZXRhPFQ+KTogdm9pZCB7XG4gIGxldCBsb2NhbEluamVjdG9yOiBJbmplY3RvcjtcbiAgY29uc3QgbmFtZTogc3RyaW5nID0ga2V5LnRvU3RyaW5nKCk7XG4gIGNvbnN0IGNhY2hlZElkOiBzdHJpbmcgPSBgI18ke25hbWV9X19zZXJ2aWNlYDtcbiAgY29uc3QgY2xhc3NSZWY6IENsYXNzUmVmPFQ+ID0gZ2V0UmVmbGVjdFR5cGU8VD4odGFyZ2V0LCBrZXkpO1xuICBjb25zb2xlLmxvZygwKTtcbiAgaWYgKG1ldGEpIHtcbiAgICBjb25zdCBmYWN0b3J5ID0gbWV0YS7JtWZhYztcbiAgICBtZXRhLsm1ZmFjID0gKCkgPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBmYWN0b3J5KHRhcmdldC5jb25zdHJ1Y3RvciBhcyBhbnkpO1xuICAgICAgbG9jYWxJbmplY3RvciA9IGRpcmVjdGl2ZUluamVjdChJTkpFQ1RPUik7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfTtcbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwge1xuICAgIFtjYWNoZWRJZF06IHtcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9LFxuICAgIFtuYW1lXToge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldCgpOiBUeXBlPFQ+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Z1Y2snKTtcbiAgICAgICAgaWYgKHRoaXNbY2FjaGVkSWRdKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXNbY2FjaGVkSWRdO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnbG9jYWxJbmplY3RvcicsIGxvY2FsSW5qZWN0b3IpXG4gICAgICAgICAgdGhpc1tjYWNoZWRJZF0gPSBsb2NhbEluamVjdG9yLmdldDxUPihjbGFzc1JlZiwgbnVsbCk7XG4gICAgICAgICAgY29uc29sZS5sb2coMSwgdGhpc1tjYWNoZWRJZF0pO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgLy8gICAgIHRoaXNbY2FjaGVkSWRdID0gZGlyZWN0aXZlSW5qZWN0PFQ+KGNsYXNzUmVmKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzW2NhY2hlZElkXTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIl0sInZlcnNpb24iOjN9