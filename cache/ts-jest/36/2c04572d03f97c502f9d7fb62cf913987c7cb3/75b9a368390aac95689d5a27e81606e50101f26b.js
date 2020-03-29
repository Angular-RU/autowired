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
                if (this[cachedId]) {
                    return this[cachedId];
                }
                try {
                    this[cachedId] = localInjector.get(classRef);
                    console.log(1);
                }
                catch (_a) {
                    this[cachedId] = core_1.ɵɵdirectiveInject(classRef);
                    console.log(2);
                }
                return this[cachedId];
            }
        }
    });
}
exports.injectService = injectService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3NwbGluY29kZS9Eb3dubG9hZHMvRGV2ZWxvcC9hdXRvd2lyZWQvcHJvamVjdHMvYXV0b3dpcmVkL3NyYy9saWIvdXRpbHMvaW5qZWN0LXNlcnZpY2UudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBK0Y7QUFFL0YseURBQW9EO0FBRXBELFNBQWdCLGFBQWEsQ0FBSSxNQUFjLEVBQUUsR0FBUSxFQUFFLElBQXVCO0lBQ2hGLElBQUksYUFBdUIsQ0FBQztJQUM1QixNQUFNLElBQUksR0FBVyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEMsTUFBTSxRQUFRLEdBQVcsS0FBSyxJQUFJLFdBQVcsQ0FBQztJQUM5QyxNQUFNLFFBQVEsR0FBZ0IsaUNBQWMsQ0FBSSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNkLElBQUksSUFBSSxFQUFFO1FBQ1IsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRTtZQUNmLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBa0IsQ0FBQyxDQUFDO1lBQ3BELGFBQWEsR0FBRyx3QkFBZSxDQUFDLGVBQVEsQ0FBQyxDQUFDO1lBQzFDLE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUMsQ0FBQztLQUNIO0lBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtRQUM5QixDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ1YsUUFBUSxFQUFFLElBQUk7WUFDZCxVQUFVLEVBQUUsS0FBSztZQUNqQixZQUFZLEVBQUUsSUFBSTtTQUNuQjtRQUNELENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDTixVQUFVLEVBQUUsSUFBSTtZQUNoQixZQUFZLEVBQUUsSUFBSTtZQUNsQixHQUFHO2dCQUNELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUNsQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDdkI7Z0JBRUQsSUFBSTtvQkFDRixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBSSxRQUFRLENBQUMsQ0FBQztvQkFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDaEI7Z0JBQUMsV0FBTTtvQkFDTixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsd0JBQWUsQ0FBSSxRQUFRLENBQUMsQ0FBQztvQkFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDaEI7Z0JBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEIsQ0FBQztTQUNGO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQXpDRCxzQ0F5Q0MiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL3NwbGluY29kZS9Eb3dubG9hZHMvRGV2ZWxvcC9hdXRvd2lyZWQvcHJvamVjdHMvYXV0b3dpcmVkL3NyYy9saWIvdXRpbHMvaW5qZWN0LXNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU5KRUNUT1IsIEluamVjdG9yLCBUeXBlLCDJtcm1ZGlyZWN0aXZlSW5qZWN0IGFzIGRpcmVjdGl2ZUluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2xhc3NSZWYsIEluamVjdGFibGVNZXRhLCBLZXkgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2ludGVybmFscyc7XG5pbXBvcnQgeyBnZXRSZWZsZWN0VHlwZSB9IGZyb20gJy4vZ2V0LXJlZmxlY3QtdHlwZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmplY3RTZXJ2aWNlPFQ+KHRhcmdldDogT2JqZWN0LCBrZXk6IEtleSwgbWV0YTogSW5qZWN0YWJsZU1ldGE8VD4pOiB2b2lkIHtcbiAgbGV0IGxvY2FsSW5qZWN0b3I6IEluamVjdG9yO1xuICBjb25zdCBuYW1lOiBzdHJpbmcgPSBrZXkudG9TdHJpbmcoKTtcbiAgY29uc3QgY2FjaGVkSWQ6IHN0cmluZyA9IGAjXyR7bmFtZX1fX3NlcnZpY2VgO1xuICBjb25zdCBjbGFzc1JlZjogQ2xhc3NSZWY8VD4gPSBnZXRSZWZsZWN0VHlwZTxUPih0YXJnZXQsIGtleSk7XG4gIGNvbnNvbGUubG9nKDApXG4gIGlmIChtZXRhKSB7XG4gICAgY29uc3QgZmFjdG9yeSA9IG1ldGEuybVmYWM7XG4gICAgbWV0YS7JtWZhYyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gZmFjdG9yeSh0YXJnZXQuY29uc3RydWN0b3IgYXMgYW55KTtcbiAgICAgIGxvY2FsSW5qZWN0b3IgPSBkaXJlY3RpdmVJbmplY3QoSU5KRUNUT1IpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHtcbiAgICBbY2FjaGVkSWRdOiB7XG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSxcbiAgICBbbmFtZV06IHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQoKTogVHlwZTxUPiB7XG4gICAgICAgIGlmICh0aGlzW2NhY2hlZElkXSkge1xuICAgICAgICAgIHJldHVybiB0aGlzW2NhY2hlZElkXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpc1tjYWNoZWRJZF0gPSBsb2NhbEluamVjdG9yLmdldDxUPihjbGFzc1JlZik7XG4gICAgICAgICAgY29uc29sZS5sb2coMSk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIHRoaXNbY2FjaGVkSWRdID0gZGlyZWN0aXZlSW5qZWN0PFQ+KGNsYXNzUmVmKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzW2NhY2hlZElkXTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIl0sInZlcnNpb24iOjN9