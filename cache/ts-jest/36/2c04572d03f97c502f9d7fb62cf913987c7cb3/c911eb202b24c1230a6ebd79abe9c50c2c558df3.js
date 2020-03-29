"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const get_reflect_type_1 = require("./get-reflect-type");
function injectService(target, key, meta) {
    let localInjector;
    const name = key.toString();
    const cachedId = `#_${name}__service`;
    const classRef = get_reflect_type_1.getReflectType(target, key);
    if (meta && meta.ɵfac) {
        const factory = meta.ɵfac;
        meta.ɵfac = () => {
            const instance = factory(target.constructor);
            localInjector = core_1.ɵɵdirectiveInject(core_1.INJECTOR);
            console.log('created');
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
                if (this[cachedId]) {
                    return this[cachedId];
                }
                try {
                    if (!localInjector) {
                        // localInjector = directiveInject(INJECTOR) || createInjector(INJECTOR);
                        console.log('localInjector', localInjector);
                    }
                    this[cachedId] = localInjector.get(classRef);
                }
                catch (e) {
                    console.log('e', e.message);
                    this[cachedId] = core_1.ɵɵdirectiveInject(classRef);
                    console.log(2);
                }
                return this[cachedId];
            }
        }
    });
}
exports.injectService = injectService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3NwbGluY29kZS9Eb3dubG9hZHMvRGV2ZWxvcC9hdXRvd2lyZWQvcHJvamVjdHMvYXV0b3dpcmVkL3NyYy9saWIvdXRpbHMvaW5qZWN0LXNlcnZpY2UudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBK0Y7QUFHL0YseURBQW9EO0FBRXBELFNBQWdCLGFBQWEsQ0FBSSxNQUFjLEVBQUUsR0FBUSxFQUFFLElBQXVCO0lBQ2hGLElBQUksYUFBdUIsQ0FBQztJQUM1QixNQUFNLElBQUksR0FBVyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEMsTUFBTSxRQUFRLEdBQVcsS0FBSyxJQUFJLFdBQVcsQ0FBQztJQUM5QyxNQUFNLFFBQVEsR0FBZ0IsaUNBQWMsQ0FBSSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFN0QsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtRQUNyQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRTFCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFO1lBQ2YsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFrQixDQUFDLENBQUM7WUFDcEQsYUFBYSxHQUFHLHdCQUFlLENBQUMsZUFBUSxDQUFDLENBQUM7WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QixPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDLENBQUM7S0FDSDtJQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7UUFDOUIsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNWLFFBQVEsRUFBRSxJQUFJO1lBQ2QsVUFBVSxFQUFFLEtBQUs7WUFDakIsWUFBWSxFQUFFLElBQUk7U0FDbkI7UUFDRCxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ04sVUFBVSxFQUFFLElBQUk7WUFDaEIsWUFBWSxFQUFFLElBQUk7WUFDbEIsR0FBRztnQkFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDbEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3ZCO2dCQUVELElBQUk7b0JBQ0YsSUFBSSxDQUFDLGFBQWEsRUFBRTt3QkFDbEIseUVBQXlFO3dCQUN6RSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQztxQkFDN0M7b0JBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUksUUFBUSxDQUFDLENBQUM7aUJBQ2pEO2dCQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLHdCQUFlLENBQUksUUFBUSxDQUFDLENBQUM7b0JBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2hCO2dCQUVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3hCLENBQUM7U0FDRjtLQUNGLENBQUMsQ0FBQztBQUNMLENBQUM7QUFoREQsc0NBZ0RDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcGxpbmNvZGUvRG93bmxvYWRzL0RldmVsb3AvYXV0b3dpcmVkL3Byb2plY3RzL2F1dG93aXJlZC9zcmMvbGliL3V0aWxzL2luamVjdC1zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElOSkVDVE9SLCBJbmplY3RvciwgVHlwZSwgybXJtWRpcmVjdGl2ZUluamVjdCBhcyBkaXJlY3RpdmVJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IMm1Y3JlYXRlSW5qZWN0b3IgYXMgY3JlYXRlSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENsYXNzUmVmLCBJbmplY3RhYmxlTWV0YSwgS2V5IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnRlcm5hbHMnO1xuaW1wb3J0IHsgZ2V0UmVmbGVjdFR5cGUgfSBmcm9tICcuL2dldC1yZWZsZWN0LXR5cGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5qZWN0U2VydmljZTxUPih0YXJnZXQ6IE9iamVjdCwga2V5OiBLZXksIG1ldGE6IEluamVjdGFibGVNZXRhPFQ+KTogdm9pZCB7XG4gIGxldCBsb2NhbEluamVjdG9yOiBJbmplY3RvcjtcbiAgY29uc3QgbmFtZTogc3RyaW5nID0ga2V5LnRvU3RyaW5nKCk7XG4gIGNvbnN0IGNhY2hlZElkOiBzdHJpbmcgPSBgI18ke25hbWV9X19zZXJ2aWNlYDtcbiAgY29uc3QgY2xhc3NSZWY6IENsYXNzUmVmPFQ+ID0gZ2V0UmVmbGVjdFR5cGU8VD4odGFyZ2V0LCBrZXkpO1xuXG4gIGlmIChtZXRhICYmIG1ldGEuybVmYWMpIHtcbiAgICBjb25zdCBmYWN0b3J5ID0gbWV0YS7JtWZhYztcblxuICAgIG1ldGEuybVmYWMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IGZhY3RvcnkodGFyZ2V0LmNvbnN0cnVjdG9yIGFzIGFueSk7XG4gICAgICBsb2NhbEluamVjdG9yID0gZGlyZWN0aXZlSW5qZWN0KElOSkVDVE9SKTtcbiAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGVkJyk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfTtcbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwge1xuICAgIFtjYWNoZWRJZF06IHtcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9LFxuICAgIFtuYW1lXToge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldCgpOiBUeXBlPFQ+IHtcbiAgICAgICAgaWYgKHRoaXNbY2FjaGVkSWRdKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXNbY2FjaGVkSWRdO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIWxvY2FsSW5qZWN0b3IpIHtcbiAgICAgICAgICAgIC8vIGxvY2FsSW5qZWN0b3IgPSBkaXJlY3RpdmVJbmplY3QoSU5KRUNUT1IpIHx8IGNyZWF0ZUluamVjdG9yKElOSkVDVE9SKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2NhbEluamVjdG9yJywgbG9jYWxJbmplY3Rvcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpc1tjYWNoZWRJZF0gPSBsb2NhbEluamVjdG9yLmdldDxUPihjbGFzc1JlZik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnZScsIGUubWVzc2FnZSk7XG4gICAgICAgICAgdGhpc1tjYWNoZWRJZF0gPSBkaXJlY3RpdmVJbmplY3Q8VD4oY2xhc3NSZWYpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXNbY2FjaGVkSWRdO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iXSwidmVyc2lvbiI6M30=