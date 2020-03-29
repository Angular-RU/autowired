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
            console.log('factory');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3NwbGluY29kZS9Eb3dubG9hZHMvRGV2ZWxvcC9hdXRvd2lyZWQvcHJvamVjdHMvYXV0b3dpcmVkL3NyYy9saWIvdXRpbHMvaW5qZWN0LXNlcnZpY2UudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBK0Y7QUFFL0YseURBQW9EO0FBRXBELFNBQWdCLGFBQWEsQ0FBSSxNQUFjLEVBQUUsR0FBUSxFQUFFLElBQXVCO0lBQ2hGLElBQUksYUFBdUIsQ0FBQztJQUM1QixNQUFNLElBQUksR0FBVyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEMsTUFBTSxRQUFRLEdBQVcsS0FBSyxJQUFJLFdBQVcsQ0FBQztJQUM5QyxNQUFNLFFBQVEsR0FBZ0IsaUNBQWMsQ0FBSSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNmLElBQUksSUFBSSxFQUFFO1FBQ1IsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRTtZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDdEIsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFrQixDQUFDLENBQUM7WUFDcEQsYUFBYSxHQUFHLHdCQUFlLENBQUMsZUFBUSxDQUFDLENBQUM7WUFDMUMsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQyxDQUFDO0tBQ0g7SUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO1FBQzlCLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDVixRQUFRLEVBQUUsSUFBSTtZQUNkLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFlBQVksRUFBRSxJQUFJO1NBQ25CO1FBQ0QsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNOLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLEdBQUc7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQ2xCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUN2QjtnQkFFRCxJQUFJO29CQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFBO29CQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBSSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2lCQUNoQztnQkFBQyxXQUFNO29CQUNYLHFEQUFxRDtvQkFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDaEI7Z0JBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEIsQ0FBQztTQUNGO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQTVDRCxzQ0E0Q0MiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL3NwbGluY29kZS9Eb3dubG9hZHMvRGV2ZWxvcC9hdXRvd2lyZWQvcHJvamVjdHMvYXV0b3dpcmVkL3NyYy9saWIvdXRpbHMvaW5qZWN0LXNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU5KRUNUT1IsIEluamVjdG9yLCBUeXBlLCDJtcm1ZGlyZWN0aXZlSW5qZWN0IGFzIGRpcmVjdGl2ZUluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2xhc3NSZWYsIEluamVjdGFibGVNZXRhLCBLZXkgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2ludGVybmFscyc7XG5pbXBvcnQgeyBnZXRSZWZsZWN0VHlwZSB9IGZyb20gJy4vZ2V0LXJlZmxlY3QtdHlwZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmplY3RTZXJ2aWNlPFQ+KHRhcmdldDogT2JqZWN0LCBrZXk6IEtleSwgbWV0YTogSW5qZWN0YWJsZU1ldGE8VD4pOiB2b2lkIHtcbiAgbGV0IGxvY2FsSW5qZWN0b3I6IEluamVjdG9yO1xuICBjb25zdCBuYW1lOiBzdHJpbmcgPSBrZXkudG9TdHJpbmcoKTtcbiAgY29uc3QgY2FjaGVkSWQ6IHN0cmluZyA9IGAjXyR7bmFtZX1fX3NlcnZpY2VgO1xuICBjb25zdCBjbGFzc1JlZjogQ2xhc3NSZWY8VD4gPSBnZXRSZWZsZWN0VHlwZTxUPih0YXJnZXQsIGtleSk7XG4gIGNvbnNvbGUubG9nKDApO1xuICBpZiAobWV0YSkge1xuICAgIGNvbnN0IGZhY3RvcnkgPSBtZXRhLsm1ZmFjO1xuICAgIG1ldGEuybVmYWMgPSAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZmFjdG9yeScpXG4gICAgICBjb25zdCBpbnN0YW5jZSA9IGZhY3RvcnkodGFyZ2V0LmNvbnN0cnVjdG9yIGFzIGFueSk7XG4gICAgICBsb2NhbEluamVjdG9yID0gZGlyZWN0aXZlSW5qZWN0KElOSkVDVE9SKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCB7XG4gICAgW2NhY2hlZElkXToge1xuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgW25hbWVdOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0KCk6IFR5cGU8VD4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZnVjaycpO1xuICAgICAgICBpZiAodGhpc1tjYWNoZWRJZF0pIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1tjYWNoZWRJZF07XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2NhbEluamVjdG9yJywgbG9jYWxJbmplY3RvcilcbiAgICAgICAgICB0aGlzW2NhY2hlZElkXSA9IGxvY2FsSW5qZWN0b3IuZ2V0PFQ+KGNsYXNzUmVmLCBudWxsKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygxLCB0aGlzW2NhY2hlZElkXSk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAvLyAgICAgdGhpc1tjYWNoZWRJZF0gPSBkaXJlY3RpdmVJbmplY3Q8VD4oY2xhc3NSZWYpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXNbY2FjaGVkSWRdO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iXSwidmVyc2lvbiI6M30=