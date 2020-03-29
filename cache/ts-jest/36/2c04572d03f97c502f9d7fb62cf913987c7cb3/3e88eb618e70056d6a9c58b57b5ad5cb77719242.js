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
                    //this[cachedId] = directiveInject<T>(classRef);
                    console.log(2);
                }
                return this[cachedId];
            }
        }
    });
}
exports.injectService = injectService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3NwbGluY29kZS9Eb3dubG9hZHMvRGV2ZWxvcC9hdXRvd2lyZWQvcHJvamVjdHMvYXV0b3dpcmVkL3NyYy9saWIvdXRpbHMvaW5qZWN0LXNlcnZpY2UudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBK0Y7QUFHL0YseURBQW9EO0FBRXBELFNBQWdCLGFBQWEsQ0FBSSxNQUFjLEVBQUUsR0FBUSxFQUFFLElBQXVCO0lBQ2hGLElBQUksYUFBdUIsQ0FBQztJQUM1QixNQUFNLElBQUksR0FBVyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEMsTUFBTSxRQUFRLEdBQVcsS0FBSyxJQUFJLFdBQVcsQ0FBQztJQUM5QyxNQUFNLFFBQVEsR0FBZ0IsaUNBQWMsQ0FBSSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFN0QsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtRQUNyQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRTFCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFO1lBQ2YsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFrQixDQUFDLENBQUM7WUFDcEQsYUFBYSxHQUFHLHdCQUFlLENBQUMsZUFBUSxDQUFDLENBQUM7WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QixPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDLENBQUM7S0FDSDtJQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7UUFDOUIsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNWLFFBQVEsRUFBRSxJQUFJO1lBQ2QsVUFBVSxFQUFFLEtBQUs7WUFDakIsWUFBWSxFQUFFLElBQUk7U0FDbkI7UUFDRCxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ04sVUFBVSxFQUFFLElBQUk7WUFDaEIsWUFBWSxFQUFFLElBQUk7WUFDbEIsR0FBRztnQkFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDbEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3ZCO2dCQUVELElBQUk7b0JBQ0YsSUFBSSxDQUFDLGFBQWEsRUFBRTt3QkFDbEIseUVBQXlFO3dCQUN6RSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQztxQkFDN0M7b0JBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUksUUFBUSxDQUFDLENBQUM7aUJBQ2pEO2dCQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDNUIsZ0RBQWdEO29CQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNoQjtnQkFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4QixDQUFDO1NBQ0Y7S0FDRixDQUFDLENBQUM7QUFDTCxDQUFDO0FBaERELHNDQWdEQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvc3BsaW5jb2RlL0Rvd25sb2Fkcy9EZXZlbG9wL2F1dG93aXJlZC9wcm9qZWN0cy9hdXRvd2lyZWQvc3JjL2xpYi91dGlscy9pbmplY3Qtc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTkpFQ1RPUiwgSW5qZWN0b3IsIFR5cGUsIMm1ybVkaXJlY3RpdmVJbmplY3QgYXMgZGlyZWN0aXZlSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyDJtWNyZWF0ZUluamVjdG9yIGFzIGNyZWF0ZUluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbGFzc1JlZiwgSW5qZWN0YWJsZU1ldGEsIEtleSB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW50ZXJuYWxzJztcbmltcG9ydCB7IGdldFJlZmxlY3RUeXBlIH0gZnJvbSAnLi9nZXQtcmVmbGVjdC10eXBlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluamVjdFNlcnZpY2U8VD4odGFyZ2V0OiBPYmplY3QsIGtleTogS2V5LCBtZXRhOiBJbmplY3RhYmxlTWV0YTxUPik6IHZvaWQge1xuICBsZXQgbG9jYWxJbmplY3RvcjogSW5qZWN0b3I7XG4gIGNvbnN0IG5hbWU6IHN0cmluZyA9IGtleS50b1N0cmluZygpO1xuICBjb25zdCBjYWNoZWRJZDogc3RyaW5nID0gYCNfJHtuYW1lfV9fc2VydmljZWA7XG4gIGNvbnN0IGNsYXNzUmVmOiBDbGFzc1JlZjxUPiA9IGdldFJlZmxlY3RUeXBlPFQ+KHRhcmdldCwga2V5KTtcblxuICBpZiAobWV0YSAmJiBtZXRhLsm1ZmFjKSB7XG4gICAgY29uc3QgZmFjdG9yeSA9IG1ldGEuybVmYWM7XG5cbiAgICBtZXRhLsm1ZmFjID0gKCkgPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBmYWN0b3J5KHRhcmdldC5jb25zdHJ1Y3RvciBhcyBhbnkpO1xuICAgICAgbG9jYWxJbmplY3RvciA9IGRpcmVjdGl2ZUluamVjdChJTkpFQ1RPUik7XG4gICAgICBjb25zb2xlLmxvZygnY3JlYXRlZCcpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHtcbiAgICBbY2FjaGVkSWRdOiB7XG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSxcbiAgICBbbmFtZV06IHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQoKTogVHlwZTxUPiB7XG4gICAgICAgIGlmICh0aGlzW2NhY2hlZElkXSkge1xuICAgICAgICAgIHJldHVybiB0aGlzW2NhY2hlZElkXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFsb2NhbEluamVjdG9yKSB7XG4gICAgICAgICAgICAvLyBsb2NhbEluamVjdG9yID0gZGlyZWN0aXZlSW5qZWN0KElOSkVDVE9SKSB8fCBjcmVhdGVJbmplY3RvcihJTkpFQ1RPUik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9jYWxJbmplY3RvcicsIGxvY2FsSW5qZWN0b3IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXNbY2FjaGVkSWRdID0gbG9jYWxJbmplY3Rvci5nZXQ8VD4oY2xhc3NSZWYpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2UnLCBlLm1lc3NhZ2UpO1xuICAgICAgICAgIC8vdGhpc1tjYWNoZWRJZF0gPSBkaXJlY3RpdmVJbmplY3Q8VD4oY2xhc3NSZWYpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXNbY2FjaGVkSWRdO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iXSwidmVyc2lvbiI6M30=