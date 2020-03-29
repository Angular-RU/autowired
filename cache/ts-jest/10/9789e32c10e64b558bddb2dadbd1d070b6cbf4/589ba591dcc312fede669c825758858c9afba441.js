"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
function injectToken(target, key, token) {
    const name = key.toString();
    const hash = `#_${name}_token`;
    Object.defineProperties(target, {
        [hash]: {
            writable: true,
            enumerable: false,
            configurable: true
        },
        [name]: {
            enumerable: true,
            configurable: true,
            get() {
                if (this[hash]) {
                    return this[hash];
                }
                this[hash] = core_1.ɵɵdirectiveInject(token);
                return this[hash];
            }
        }
    });
}
exports.injectToken = injectToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3NwbGluY29kZS9Eb3dubG9hZHMvRGV2ZWxvcC9hdXRvd2lyZWQvcHJvamVjdHMvYXV0b3dpcmVkL3NyYy9saWIvdXRpbHMvaW5qZWN0LXRva2VuLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQXFGO0FBR3JGLFNBQWdCLFdBQVcsQ0FBSSxNQUFjLEVBQUUsR0FBUSxFQUFFLEtBQXdCO0lBQy9FLE1BQU0sSUFBSSxHQUFXLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQyxNQUFNLElBQUksR0FBVyxLQUFLLElBQUksUUFBUSxDQUFDO0lBRXZDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7UUFDOUIsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNOLFFBQVEsRUFBRSxJQUFJO1lBQ2QsVUFBVSxFQUFFLEtBQUs7WUFDakIsWUFBWSxFQUFFLElBQUk7U0FDbkI7UUFDRCxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ04sVUFBVSxFQUFFLElBQUk7WUFDaEIsWUFBWSxFQUFFLElBQUk7WUFDbEIsR0FBRztnQkFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDbkI7Z0JBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLHdCQUFlLENBQUksS0FBSyxDQUFDLENBQUM7Z0JBQ3ZDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCLENBQUM7U0FDRjtLQUNGLENBQUMsQ0FBQztBQUNMLENBQUM7QUF2QkQsa0NBdUJDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcGxpbmNvZGUvRG93bmxvYWRzL0RldmVsb3AvYXV0b3dpcmVkL3Byb2plY3RzL2F1dG93aXJlZC9zcmMvbGliL3V0aWxzL2luamVjdC10b2tlbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgybXJtWRpcmVjdGl2ZUluamVjdCBhcyBkaXJlY3RpdmVJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEtleSB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW50ZXJuYWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluamVjdFRva2VuPFQ+KHRhcmdldDogT2JqZWN0LCBrZXk6IEtleSwgdG9rZW46IEluamVjdGlvblRva2VuPFQ+KTogdm9pZCB7XG4gIGNvbnN0IG5hbWU6IHN0cmluZyA9IGtleS50b1N0cmluZygpO1xuICBjb25zdCBoYXNoOiBzdHJpbmcgPSBgI18ke25hbWV9X3Rva2VuYDtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHtcbiAgICBbaGFzaF06IHtcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9LFxuICAgIFtuYW1lXToge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldCgpOiBUIHtcbiAgICAgICAgaWYgKHRoaXNbaGFzaF0pIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1toYXNoXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXNbaGFzaF0gPSBkaXJlY3RpdmVJbmplY3Q8VD4odG9rZW4pO1xuICAgICAgICByZXR1cm4gdGhpc1toYXNoXTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIl0sInZlcnNpb24iOjN9