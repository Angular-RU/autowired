"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const core_2 = require("@angular/core");
const get_reflect_type_1 = require("./get-reflect-type");
function injectService(target, key, meta) {
    let localInjector;
    const name = key.toString();
    const cachedId = `#_${name}__service`;
    const classRef = get_reflect_type_1.getReflectType(target, key);
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
                    if (!localInjector) {
                        localInjector = core_1.ɵɵdirectiveInject(core_1.INJECTOR) || core_2.ɵcreateInjector(core_1.INJECTOR);
                        console.log('localInjector', localInjector);
                    }
                    this[cachedId] = localInjector.get(classRef);
                }
                catch (_a) {
                    //this[cachedId] = directiveInject<T>(classRef);
                    console.log(2);
                }
                return this[cachedId];
            }
        }
    });
}
exports.injectService = injectService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3NwbGluY29kZS9Eb3dubG9hZHMvRGV2ZWxvcC9hdXRvd2lyZWQvcHJvamVjdHMvYXV0b3dpcmVkL3NyYy9saWIvdXRpbHMvaW5qZWN0LXNlcnZpY2UudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBK0Y7QUFDL0Ysd0NBQWtFO0FBRWxFLHlEQUFvRDtBQUVwRCxTQUFnQixhQUFhLENBQUksTUFBYyxFQUFFLEdBQVEsRUFBRSxJQUF1QjtJQUNoRixJQUFJLGFBQXVCLENBQUM7SUFDNUIsTUFBTSxJQUFJLEdBQVcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BDLE1BQU0sUUFBUSxHQUFXLEtBQUssSUFBSSxXQUFXLENBQUM7SUFDOUMsTUFBTSxRQUFRLEdBQWdCLGlDQUFjLENBQUksTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRTdELElBQUksSUFBSSxFQUFFO1FBQ1IsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUUxQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRTtZQUNmLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBa0IsQ0FBQyxDQUFDO1lBQ3BELGFBQWEsR0FBRyx3QkFBZSxDQUFDLGVBQVEsQ0FBQyxDQUFDO1lBQzFDLE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUMsQ0FBQztLQUNIO0lBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtRQUM5QixDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ1YsUUFBUSxFQUFFLElBQUk7WUFDZCxVQUFVLEVBQUUsS0FBSztZQUNqQixZQUFZLEVBQUUsSUFBSTtTQUNuQjtRQUNELENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDTixVQUFVLEVBQUUsSUFBSTtZQUNoQixZQUFZLEVBQUUsSUFBSTtZQUNsQixHQUFHO2dCQUNELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUNsQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDdkI7Z0JBRUQsSUFBSTtvQkFDRixJQUFJLENBQUMsYUFBYSxFQUFFO3dCQUNsQixhQUFhLEdBQUcsd0JBQWUsQ0FBQyxlQUFRLENBQUMsSUFBSSxzQkFBYyxDQUFDLGVBQVEsQ0FBQyxDQUFDO3dCQUN0RSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQTtxQkFDNUM7b0JBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUksUUFBUSxDQUFDLENBQUM7aUJBQ2pEO2dCQUFDLFdBQU07b0JBQ04sZ0RBQWdEO29CQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNoQjtnQkFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4QixDQUFDO1NBQ0Y7S0FDRixDQUFDLENBQUM7QUFDTCxDQUFDO0FBOUNELHNDQThDQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvc3BsaW5jb2RlL0Rvd25sb2Fkcy9EZXZlbG9wL2F1dG93aXJlZC9wcm9qZWN0cy9hdXRvd2lyZWQvc3JjL2xpYi91dGlscy9pbmplY3Qtc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTkpFQ1RPUiwgSW5qZWN0b3IsIFR5cGUsIMm1ybVkaXJlY3RpdmVJbmplY3QgYXMgZGlyZWN0aXZlSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyDJtWNyZWF0ZUluamVjdG9yIGFzIGNyZWF0ZUluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbGFzc1JlZiwgSW5qZWN0YWJsZU1ldGEsIEtleSB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW50ZXJuYWxzJztcbmltcG9ydCB7IGdldFJlZmxlY3RUeXBlIH0gZnJvbSAnLi9nZXQtcmVmbGVjdC10eXBlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluamVjdFNlcnZpY2U8VD4odGFyZ2V0OiBPYmplY3QsIGtleTogS2V5LCBtZXRhOiBJbmplY3RhYmxlTWV0YTxUPik6IHZvaWQge1xuICBsZXQgbG9jYWxJbmplY3RvcjogSW5qZWN0b3I7XG4gIGNvbnN0IG5hbWU6IHN0cmluZyA9IGtleS50b1N0cmluZygpO1xuICBjb25zdCBjYWNoZWRJZDogc3RyaW5nID0gYCNfJHtuYW1lfV9fc2VydmljZWA7XG4gIGNvbnN0IGNsYXNzUmVmOiBDbGFzc1JlZjxUPiA9IGdldFJlZmxlY3RUeXBlPFQ+KHRhcmdldCwga2V5KTtcblxuICBpZiAobWV0YSkge1xuICAgIGNvbnN0IGZhY3RvcnkgPSBtZXRhLsm1ZmFjO1xuXG4gICAgbWV0YS7JtWZhYyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gZmFjdG9yeSh0YXJnZXQuY29uc3RydWN0b3IgYXMgYW55KTtcbiAgICAgIGxvY2FsSW5qZWN0b3IgPSBkaXJlY3RpdmVJbmplY3QoSU5KRUNUT1IpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHtcbiAgICBbY2FjaGVkSWRdOiB7XG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSxcbiAgICBbbmFtZV06IHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQoKTogVHlwZTxUPiB7XG4gICAgICAgIGlmICh0aGlzW2NhY2hlZElkXSkge1xuICAgICAgICAgIHJldHVybiB0aGlzW2NhY2hlZElkXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFsb2NhbEluamVjdG9yKSB7XG4gICAgICAgICAgICBsb2NhbEluamVjdG9yID0gZGlyZWN0aXZlSW5qZWN0KElOSkVDVE9SKSB8fCBjcmVhdGVJbmplY3RvcihJTkpFQ1RPUik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9jYWxJbmplY3RvcicsIGxvY2FsSW5qZWN0b3IpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpc1tjYWNoZWRJZF0gPSBsb2NhbEluamVjdG9yLmdldDxUPihjbGFzc1JlZik7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIC8vdGhpc1tjYWNoZWRJZF0gPSBkaXJlY3RpdmVJbmplY3Q8VD4oY2xhc3NSZWYpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXNbY2FjaGVkSWRdO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iXSwidmVyc2lvbiI6M30=