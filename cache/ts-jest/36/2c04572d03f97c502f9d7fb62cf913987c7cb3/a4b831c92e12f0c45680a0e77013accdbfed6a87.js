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
            setTimeout(() => {
                console.log('fuck');
            }, 3000);
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
                    //this[cachedId] = directiveInject<T>(classRef);
                    console.log(2);
                }
                return this[cachedId];
            }
        }
    });
}
exports.injectService = injectService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3NwbGluY29kZS9Eb3dubG9hZHMvRGV2ZWxvcC9hdXRvd2lyZWQvcHJvamVjdHMvYXV0b3dpcmVkL3NyYy9saWIvdXRpbHMvaW5qZWN0LXNlcnZpY2UudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBK0Y7QUFHL0YseURBQW9EO0FBRXBELFNBQWdCLGFBQWEsQ0FBSSxNQUFjLEVBQUUsR0FBUSxFQUFFLElBQXVCO0lBQ2hGLElBQUksYUFBdUIsQ0FBQztJQUM1QixNQUFNLElBQUksR0FBVyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEMsTUFBTSxRQUFRLEdBQVcsS0FBSyxJQUFJLFdBQVcsQ0FBQztJQUM5QyxNQUFNLFFBQVEsR0FBZ0IsaUNBQWMsQ0FBSSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFN0QsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtRQUNyQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRTFCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFO1lBQ2YsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFrQixDQUFDLENBQUM7WUFDcEQsYUFBYSxHQUFHLHdCQUFlLENBQUMsZUFBUSxDQUFDLENBQUM7WUFDMUMsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ3JCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkIsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQyxDQUFDO0tBQ0g7SUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO1FBQzlCLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDVixRQUFRLEVBQUUsSUFBSTtZQUNkLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFlBQVksRUFBRSxJQUFJO1NBQ25CO1FBQ0QsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNOLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLEdBQUc7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQ2xCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUN2QjtnQkFFRCxJQUFJO29CQUNGLElBQUksQ0FBQyxhQUFhLEVBQUU7d0JBQ2xCLHlFQUF5RTt3QkFDekUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUM7cUJBQzdDO29CQUVELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFJLFFBQVEsQ0FBQyxDQUFDO2lCQUNqRDtnQkFBQyxPQUFPLENBQUMsRUFBRTtvQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzVCLGdEQUFnRDtvQkFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDaEI7Z0JBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEIsQ0FBQztTQUNGO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQW5ERCxzQ0FtREMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL3NwbGluY29kZS9Eb3dubG9hZHMvRGV2ZWxvcC9hdXRvd2lyZWQvcHJvamVjdHMvYXV0b3dpcmVkL3NyYy9saWIvdXRpbHMvaW5qZWN0LXNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU5KRUNUT1IsIEluamVjdG9yLCBUeXBlLCDJtcm1ZGlyZWN0aXZlSW5qZWN0IGFzIGRpcmVjdGl2ZUluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgybVjcmVhdGVJbmplY3RvciBhcyBjcmVhdGVJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2xhc3NSZWYsIEluamVjdGFibGVNZXRhLCBLZXkgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2ludGVybmFscyc7XG5pbXBvcnQgeyBnZXRSZWZsZWN0VHlwZSB9IGZyb20gJy4vZ2V0LXJlZmxlY3QtdHlwZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmplY3RTZXJ2aWNlPFQ+KHRhcmdldDogT2JqZWN0LCBrZXk6IEtleSwgbWV0YTogSW5qZWN0YWJsZU1ldGE8VD4pOiB2b2lkIHtcbiAgbGV0IGxvY2FsSW5qZWN0b3I6IEluamVjdG9yO1xuICBjb25zdCBuYW1lOiBzdHJpbmcgPSBrZXkudG9TdHJpbmcoKTtcbiAgY29uc3QgY2FjaGVkSWQ6IHN0cmluZyA9IGAjXyR7bmFtZX1fX3NlcnZpY2VgO1xuICBjb25zdCBjbGFzc1JlZjogQ2xhc3NSZWY8VD4gPSBnZXRSZWZsZWN0VHlwZTxUPih0YXJnZXQsIGtleSk7XG5cbiAgaWYgKG1ldGEgJiYgbWV0YS7JtWZhYykge1xuICAgIGNvbnN0IGZhY3RvcnkgPSBtZXRhLsm1ZmFjO1xuXG4gICAgbWV0YS7JtWZhYyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gZmFjdG9yeSh0YXJnZXQuY29uc3RydWN0b3IgYXMgYW55KTtcbiAgICAgIGxvY2FsSW5qZWN0b3IgPSBkaXJlY3RpdmVJbmplY3QoSU5KRUNUT1IpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdmdWNrJylcbiAgICAgIH0sIDMwMDApXG4gICAgICBjb25zb2xlLmxvZygnY3JlYXRlZCcpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHtcbiAgICBbY2FjaGVkSWRdOiB7XG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSxcbiAgICBbbmFtZV06IHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQoKTogVHlwZTxUPiB7XG4gICAgICAgIGlmICh0aGlzW2NhY2hlZElkXSkge1xuICAgICAgICAgIHJldHVybiB0aGlzW2NhY2hlZElkXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFsb2NhbEluamVjdG9yKSB7XG4gICAgICAgICAgICAvLyBsb2NhbEluamVjdG9yID0gZGlyZWN0aXZlSW5qZWN0KElOSkVDVE9SKSB8fCBjcmVhdGVJbmplY3RvcihJTkpFQ1RPUik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9jYWxJbmplY3RvcicsIGxvY2FsSW5qZWN0b3IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXNbY2FjaGVkSWRdID0gbG9jYWxJbmplY3Rvci5nZXQ8VD4oY2xhc3NSZWYpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2UnLCBlLm1lc3NhZ2UpO1xuICAgICAgICAgIC8vdGhpc1tjYWNoZWRJZF0gPSBkaXJlY3RpdmVJbmplY3Q8VD4oY2xhc3NSZWYpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXNbY2FjaGVkSWRdO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iXSwidmVyc2lvbiI6M30=