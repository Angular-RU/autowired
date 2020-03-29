"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
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
                    this[cachedId] = localInjector.get(classRef);
                }
                catch (_a) {
                    this[cachedId] = core_1.ɵɵdirectiveInject(classRef);
                }
                return this[cachedId];
            }
        }
    });
}
exports.injectService = injectService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3NwbGluY29kZS9Eb3dubG9hZHMvRGV2ZWxvcC9hdXRvd2lyZWQvcHJvamVjdHMvYXV0b3dpcmVkL3NyYy9saWIvdXRpbHMvaW5qZWN0LXNlcnZpY2UudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBK0Y7QUFFL0YseURBQW9EO0FBRXBELFNBQWdCLGFBQWEsQ0FBSSxNQUFjLEVBQUUsR0FBUSxFQUFFLElBQXVCO0lBQ2hGLElBQUksYUFBdUIsQ0FBQztJQUM1QixNQUFNLElBQUksR0FBVyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEMsTUFBTSxRQUFRLEdBQVcsS0FBSyxJQUFJLFdBQVcsQ0FBQztJQUM5QyxNQUFNLFFBQVEsR0FBZ0IsaUNBQWMsQ0FBSSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFN0QsSUFBSSxJQUFJLEVBQUU7UUFDUixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFO1lBQ2YsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFrQixDQUFDLENBQUM7WUFDcEQsYUFBYSxHQUFHLHdCQUFlLENBQUMsZUFBUSxDQUFDLENBQUM7WUFDMUMsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQyxDQUFDO0tBQ0g7SUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO1FBQzlCLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDVixRQUFRLEVBQUUsSUFBSTtZQUNkLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFlBQVksRUFBRSxJQUFJO1NBQ25CO1FBQ0QsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNOLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLEdBQUc7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQ2xCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUN2QjtnQkFFRCxJQUFJO29CQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFJLFFBQVEsQ0FBQyxDQUFDO2lCQUNqRDtnQkFBQyxXQUFNO29CQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyx3QkFBZSxDQUFJLFFBQVEsQ0FBQyxDQUFDO2lCQUMvQztnQkFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4QixDQUFDO1NBQ0Y7S0FDRixDQUFDLENBQUM7QUFDTCxDQUFDO0FBdkNELHNDQXVDQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvc3BsaW5jb2RlL0Rvd25sb2Fkcy9EZXZlbG9wL2F1dG93aXJlZC9wcm9qZWN0cy9hdXRvd2lyZWQvc3JjL2xpYi91dGlscy9pbmplY3Qtc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTkpFQ1RPUiwgSW5qZWN0b3IsIFR5cGUsIMm1ybVkaXJlY3RpdmVJbmplY3QgYXMgZGlyZWN0aXZlSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbGFzc1JlZiwgSW5qZWN0YWJsZU1ldGEsIEtleSB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW50ZXJuYWxzJztcbmltcG9ydCB7IGdldFJlZmxlY3RUeXBlIH0gZnJvbSAnLi9nZXQtcmVmbGVjdC10eXBlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluamVjdFNlcnZpY2U8VD4odGFyZ2V0OiBPYmplY3QsIGtleTogS2V5LCBtZXRhOiBJbmplY3RhYmxlTWV0YTxUPik6IHZvaWQge1xuICBsZXQgbG9jYWxJbmplY3RvcjogSW5qZWN0b3I7XG4gIGNvbnN0IG5hbWU6IHN0cmluZyA9IGtleS50b1N0cmluZygpO1xuICBjb25zdCBjYWNoZWRJZDogc3RyaW5nID0gYCNfJHtuYW1lfV9fc2VydmljZWA7XG4gIGNvbnN0IGNsYXNzUmVmOiBDbGFzc1JlZjxUPiA9IGdldFJlZmxlY3RUeXBlPFQ+KHRhcmdldCwga2V5KTtcblxuICBpZiAobWV0YSkge1xuICAgIGNvbnN0IGZhY3RvcnkgPSBtZXRhLsm1ZmFjO1xuICAgIG1ldGEuybVmYWMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IGZhY3RvcnkodGFyZ2V0LmNvbnN0cnVjdG9yIGFzIGFueSk7XG4gICAgICBsb2NhbEluamVjdG9yID0gZGlyZWN0aXZlSW5qZWN0KElOSkVDVE9SKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCB7XG4gICAgW2NhY2hlZElkXToge1xuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgW25hbWVdOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0KCk6IFR5cGU8VD4ge1xuICAgICAgICBpZiAodGhpc1tjYWNoZWRJZF0pIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1tjYWNoZWRJZF07XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXNbY2FjaGVkSWRdID0gbG9jYWxJbmplY3Rvci5nZXQ8VD4oY2xhc3NSZWYpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICB0aGlzW2NhY2hlZElkXSA9IGRpcmVjdGl2ZUluamVjdDxUPihjbGFzc1JlZik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpc1tjYWNoZWRJZF07XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiJdLCJ2ZXJzaW9uIjozfQ==