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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3NwbGluY29kZS9Eb3dubG9hZHMvRGV2ZWxvcC9hdXRvd2lyZWQvcHJvamVjdHMvYXV0b3dpcmVkL3NyYy9saWIvdXRpbHMvaW5qZWN0LXNlcnZpY2UudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBK0Y7QUFFL0YseURBQW9EO0FBRXBELFNBQWdCLGFBQWEsQ0FBSSxNQUFjLEVBQUUsR0FBUSxFQUFFLElBQXVCO0lBQ2hGLElBQUksYUFBdUIsQ0FBQztJQUM1QixNQUFNLElBQUksR0FBVyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEMsTUFBTSxRQUFRLEdBQVcsS0FBSyxJQUFJLFdBQVcsQ0FBQztJQUM5QyxNQUFNLFFBQVEsR0FBZ0IsaUNBQWMsQ0FBSSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNmLElBQUksSUFBSSxFQUFFO1FBQ1IsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRTtZQUNmLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBa0IsQ0FBQyxDQUFDO1lBQ3BELGFBQWEsR0FBRyx3QkFBZSxDQUFDLGVBQVEsQ0FBQyxDQUFDO1lBQzFDLE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUMsQ0FBQztLQUNIO0lBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtRQUM5QixDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ1YsUUFBUSxFQUFFLElBQUk7WUFDZCxVQUFVLEVBQUUsS0FBSztZQUNqQixZQUFZLEVBQUUsSUFBSTtTQUNuQjtRQUNELENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDTixVQUFVLEVBQUUsSUFBSTtZQUNoQixZQUFZLEVBQUUsSUFBSTtZQUNsQixHQUFHO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUNsQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDdkI7Z0JBRUQsSUFBSTtvQkFDRixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBSSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2lCQUNoQztnQkFBQyxXQUFNO29CQUNYLHFEQUFxRDtvQkFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDaEI7Z0JBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEIsQ0FBQztTQUNGO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQTFDRCxzQ0EwQ0MiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL3NwbGluY29kZS9Eb3dubG9hZHMvRGV2ZWxvcC9hdXRvd2lyZWQvcHJvamVjdHMvYXV0b3dpcmVkL3NyYy9saWIvdXRpbHMvaW5qZWN0LXNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU5KRUNUT1IsIEluamVjdG9yLCBUeXBlLCDJtcm1ZGlyZWN0aXZlSW5qZWN0IGFzIGRpcmVjdGl2ZUluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2xhc3NSZWYsIEluamVjdGFibGVNZXRhLCBLZXkgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2ludGVybmFscyc7XG5pbXBvcnQgeyBnZXRSZWZsZWN0VHlwZSB9IGZyb20gJy4vZ2V0LXJlZmxlY3QtdHlwZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmplY3RTZXJ2aWNlPFQ+KHRhcmdldDogT2JqZWN0LCBrZXk6IEtleSwgbWV0YTogSW5qZWN0YWJsZU1ldGE8VD4pOiB2b2lkIHtcbiAgbGV0IGxvY2FsSW5qZWN0b3I6IEluamVjdG9yO1xuICBjb25zdCBuYW1lOiBzdHJpbmcgPSBrZXkudG9TdHJpbmcoKTtcbiAgY29uc3QgY2FjaGVkSWQ6IHN0cmluZyA9IGAjXyR7bmFtZX1fX3NlcnZpY2VgO1xuICBjb25zdCBjbGFzc1JlZjogQ2xhc3NSZWY8VD4gPSBnZXRSZWZsZWN0VHlwZTxUPih0YXJnZXQsIGtleSk7XG4gIGNvbnNvbGUubG9nKDApO1xuICBpZiAobWV0YSkge1xuICAgIGNvbnN0IGZhY3RvcnkgPSBtZXRhLsm1ZmFjO1xuICAgIG1ldGEuybVmYWMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IGZhY3RvcnkodGFyZ2V0LmNvbnN0cnVjdG9yIGFzIGFueSk7XG4gICAgICBsb2NhbEluamVjdG9yID0gZGlyZWN0aXZlSW5qZWN0KElOSkVDVE9SKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCB7XG4gICAgW2NhY2hlZElkXToge1xuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgW25hbWVdOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0KCk6IFR5cGU8VD4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZnVjaycpO1xuICAgICAgICBpZiAodGhpc1tjYWNoZWRJZF0pIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1tjYWNoZWRJZF07XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXNbY2FjaGVkSWRdID0gbG9jYWxJbmplY3Rvci5nZXQ8VD4oY2xhc3NSZWYsIG51bGwpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKDEsIHRoaXNbY2FjaGVkSWRdKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgIC8vICAgICB0aGlzW2NhY2hlZElkXSA9IGRpcmVjdGl2ZUluamVjdDxUPihjbGFzc1JlZik7XG4gICAgICAgICAgY29uc29sZS5sb2coMik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpc1tjYWNoZWRJZF07XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiJdLCJ2ZXJzaW9uIjozfQ==