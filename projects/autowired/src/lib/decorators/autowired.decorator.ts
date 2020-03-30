import { ClassRef, Key } from '../interfaces/internals';
import { Type } from '@angular/core';
import { getReflectType } from '../utils/get-reflect-type';
import { NG_INJECTOR } from '../tokens/private-api';

export function Autowired<T = any>(): PropertyDecorator {
  return (target: Object, key: Key) => {
    const name: string = key.toString();
    const cachedId: string = `#_${name}__service`;
    const classRef: ClassRef<T> = getReflectType<T>(target, key);

    Object.defineProperties(target, {
      [cachedId]: {
        writable: true,
        enumerable: false,
        configurable: true
      },
      [name]: {
        enumerable: true,
        configurable: true,
        get(): Type<T> {
          if (this[cachedId]) {
            return this[cachedId];
          }

          if (!this[NG_INJECTOR]) {
            throw new Error(
              'If you use @Autowired(), you need also use @ServiceScan() before'
            );
          }

          const injector = this[NG_INJECTOR];
          this[cachedId] = injector?.get(classRef);
          return this[cachedId];
        }
      }
    });
  };
}
