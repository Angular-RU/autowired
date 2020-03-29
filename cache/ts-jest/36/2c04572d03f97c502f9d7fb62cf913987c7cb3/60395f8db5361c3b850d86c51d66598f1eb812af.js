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
                    this[cachedId] = localInjector.get(classRef);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3NwbGluY29kZS9Eb3dubG9hZHMvRGV2ZWxvcC9hdXRvd2lyZWQvcHJvamVjdHMvYXV0b3dpcmVkL3NyYy9saWIvdXRpbHMvaW5qZWN0LXNlcnZpY2UudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBK0Y7QUFFL0YseURBQW9EO0FBRXBELFNBQWdCLGFBQWEsQ0FBSSxNQUFjLEVBQUUsR0FBUSxFQUFFLElBQXVCO0lBQ2hGLElBQUksYUFBdUIsQ0FBQztJQUM1QixNQUFNLElBQUksR0FBVyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEMsTUFBTSxRQUFRLEdBQVcsS0FBSyxJQUFJLFdBQVcsQ0FBQztJQUM5QyxNQUFNLFFBQVEsR0FBZ0IsaUNBQWMsQ0FBSSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNmLElBQUksSUFBSSxFQUFFO1FBQ1IsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRTtZQUNmLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBa0IsQ0FBQyxDQUFDO1lBQ3BELGFBQWEsR0FBRyx3QkFBZSxDQUFDLGVBQVEsQ0FBQyxDQUFDO1lBQzFDLE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUMsQ0FBQztLQUNIO0lBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtRQUM5QixDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ1YsUUFBUSxFQUFFLElBQUk7WUFDZCxVQUFVLEVBQUUsS0FBSztZQUNqQixZQUFZLEVBQUUsSUFBSTtTQUNuQjtRQUNELENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDTixVQUFVLEVBQUUsSUFBSTtZQUNoQixZQUFZLEVBQUUsSUFBSTtZQUNsQixHQUFHO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUNsQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDdkI7Z0JBRUQsSUFBSTtvQkFDRixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBSSxRQUFRLENBQUMsQ0FBQztvQkFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7aUJBQ2hDO2dCQUFDLFdBQU07b0JBQ1gscURBQXFEO29CQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNoQjtnQkFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4QixDQUFDO1NBQ0Y7S0FDRixDQUFDLENBQUM7QUFDTCxDQUFDO0FBMUNELHNDQTBDQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvc3BsaW5jb2RlL0Rvd25sb2Fkcy9EZXZlbG9wL2F1dG93aXJlZC9wcm9qZWN0cy9hdXRvd2lyZWQvc3JjL2xpYi91dGlscy9pbmplY3Qtc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTkpFQ1RPUiwgSW5qZWN0b3IsIFR5cGUsIMm1ybVkaXJlY3RpdmVJbmplY3QgYXMgZGlyZWN0aXZlSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbGFzc1JlZiwgSW5qZWN0YWJsZU1ldGEsIEtleSB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW50ZXJuYWxzJztcbmltcG9ydCB7IGdldFJlZmxlY3RUeXBlIH0gZnJvbSAnLi9nZXQtcmVmbGVjdC10eXBlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluamVjdFNlcnZpY2U8VD4odGFyZ2V0OiBPYmplY3QsIGtleTogS2V5LCBtZXRhOiBJbmplY3RhYmxlTWV0YTxUPik6IHZvaWQge1xuICBsZXQgbG9jYWxJbmplY3RvcjogSW5qZWN0b3I7XG4gIGNvbnN0IG5hbWU6IHN0cmluZyA9IGtleS50b1N0cmluZygpO1xuICBjb25zdCBjYWNoZWRJZDogc3RyaW5nID0gYCNfJHtuYW1lfV9fc2VydmljZWA7XG4gIGNvbnN0IGNsYXNzUmVmOiBDbGFzc1JlZjxUPiA9IGdldFJlZmxlY3RUeXBlPFQ+KHRhcmdldCwga2V5KTtcbiAgY29uc29sZS5sb2coMCk7XG4gIGlmIChtZXRhKSB7XG4gICAgY29uc3QgZmFjdG9yeSA9IG1ldGEuybVmYWM7XG4gICAgbWV0YS7JtWZhYyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gZmFjdG9yeSh0YXJnZXQuY29uc3RydWN0b3IgYXMgYW55KTtcbiAgICAgIGxvY2FsSW5qZWN0b3IgPSBkaXJlY3RpdmVJbmplY3QoSU5KRUNUT1IpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHtcbiAgICBbY2FjaGVkSWRdOiB7XG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSxcbiAgICBbbmFtZV06IHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQoKTogVHlwZTxUPiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdmdWNrJyk7XG4gICAgICAgIGlmICh0aGlzW2NhY2hlZElkXSkge1xuICAgICAgICAgIHJldHVybiB0aGlzW2NhY2hlZElkXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpc1tjYWNoZWRJZF0gPSBsb2NhbEluamVjdG9yLmdldDxUPihjbGFzc1JlZik7XG4gICAgICAgICAgY29uc29sZS5sb2coMSwgdGhpc1tjYWNoZWRJZF0pO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgLy8gICAgIHRoaXNbY2FjaGVkSWRdID0gZGlyZWN0aXZlSW5qZWN0PFQ+KGNsYXNzUmVmKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzW2NhY2hlZElkXTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIl0sInZlcnNpb24iOjN9