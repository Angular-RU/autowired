"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            // localInjector = directiveInject(INJECTOR);
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
                    // this[cachedId] = localInjector.get<T>(classRef);
                    console.log(1);
                }
                catch (_a) {
                    // this[cachedId] = directiveInject<T>(classRef);
                    console.log(2);
                }
                return this[cachedId];
            }
        }
    });
}
exports.injectService = injectService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3NwbGluY29kZS9Eb3dubG9hZHMvRGV2ZWxvcC9hdXRvd2lyZWQvcHJvamVjdHMvYXV0b3dpcmVkL3NyYy9saWIvdXRpbHMvaW5qZWN0LXNlcnZpY2UudHMiLCJtYXBwaW5ncyI6Ijs7QUFFQSx5REFBb0Q7QUFFcEQsU0FBZ0IsYUFBYSxDQUFJLE1BQWMsRUFBRSxHQUFRLEVBQUUsSUFBdUI7SUFDaEYsSUFBSSxhQUF1QixDQUFDO0lBQzVCLE1BQU0sSUFBSSxHQUFXLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQyxNQUFNLFFBQVEsR0FBVyxLQUFLLElBQUksV0FBVyxDQUFDO0lBQzlDLE1BQU0sUUFBUSxHQUFnQixpQ0FBYyxDQUFJLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2QsSUFBSSxJQUFJLEVBQUU7UUFDUixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFO1lBQ2YsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFrQixDQUFDLENBQUM7WUFDcEQsNkNBQTZDO1lBQzdDLE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUMsQ0FBQztLQUNIO0lBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtRQUM5QixDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ1YsUUFBUSxFQUFFLElBQUk7WUFDZCxVQUFVLEVBQUUsS0FBSztZQUNqQixZQUFZLEVBQUUsSUFBSTtTQUNuQjtRQUNELENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDTixVQUFVLEVBQUUsSUFBSTtZQUNoQixZQUFZLEVBQUUsSUFBSTtZQUNsQixHQUFHO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBQ25CLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUNsQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDdkI7Z0JBRUQsSUFBSTtvQkFDRixtREFBbUQ7b0JBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2hCO2dCQUFDLFdBQU07b0JBQ04saURBQWlEO29CQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNoQjtnQkFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4QixDQUFDO1NBQ0Y7S0FDRixDQUFDLENBQUM7QUFDTCxDQUFDO0FBMUNELHNDQTBDQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvc3BsaW5jb2RlL0Rvd25sb2Fkcy9EZXZlbG9wL2F1dG93aXJlZC9wcm9qZWN0cy9hdXRvd2lyZWQvc3JjL2xpYi91dGlscy9pbmplY3Qtc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTkpFQ1RPUiwgSW5qZWN0b3IsIFR5cGUsIMm1ybVkaXJlY3RpdmVJbmplY3QgYXMgZGlyZWN0aXZlSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbGFzc1JlZiwgSW5qZWN0YWJsZU1ldGEsIEtleSB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW50ZXJuYWxzJztcbmltcG9ydCB7IGdldFJlZmxlY3RUeXBlIH0gZnJvbSAnLi9nZXQtcmVmbGVjdC10eXBlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluamVjdFNlcnZpY2U8VD4odGFyZ2V0OiBPYmplY3QsIGtleTogS2V5LCBtZXRhOiBJbmplY3RhYmxlTWV0YTxUPik6IHZvaWQge1xuICBsZXQgbG9jYWxJbmplY3RvcjogSW5qZWN0b3I7XG4gIGNvbnN0IG5hbWU6IHN0cmluZyA9IGtleS50b1N0cmluZygpO1xuICBjb25zdCBjYWNoZWRJZDogc3RyaW5nID0gYCNfJHtuYW1lfV9fc2VydmljZWA7XG4gIGNvbnN0IGNsYXNzUmVmOiBDbGFzc1JlZjxUPiA9IGdldFJlZmxlY3RUeXBlPFQ+KHRhcmdldCwga2V5KTtcbiAgY29uc29sZS5sb2coMClcbiAgaWYgKG1ldGEpIHtcbiAgICBjb25zdCBmYWN0b3J5ID0gbWV0YS7JtWZhYztcbiAgICBtZXRhLsm1ZmFjID0gKCkgPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBmYWN0b3J5KHRhcmdldC5jb25zdHJ1Y3RvciBhcyBhbnkpO1xuICAgICAgLy8gbG9jYWxJbmplY3RvciA9IGRpcmVjdGl2ZUluamVjdChJTkpFQ1RPUik7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfTtcbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwge1xuICAgIFtjYWNoZWRJZF06IHtcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9LFxuICAgIFtuYW1lXToge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldCgpOiBUeXBlPFQ+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Z1Y2snKVxuICAgICAgICBpZiAodGhpc1tjYWNoZWRJZF0pIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1tjYWNoZWRJZF07XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIHRoaXNbY2FjaGVkSWRdID0gbG9jYWxJbmplY3Rvci5nZXQ8VD4oY2xhc3NSZWYpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKDEpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAvLyB0aGlzW2NhY2hlZElkXSA9IGRpcmVjdGl2ZUluamVjdDxUPihjbGFzc1JlZik7XG4gICAgICAgICAgY29uc29sZS5sb2coMik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpc1tjYWNoZWRJZF07XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiJdLCJ2ZXJzaW9uIjozfQ==