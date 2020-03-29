import { INJECTOR, Injector, Type, ɵɵdirectiveInject as directiveInject } from '@angular/core';
import { ɵcreateInjector as createInjector } from '@angular/core';
import { ClassRef, InjectableMeta, Key } from '../interfaces/internals';
import { getReflectType } from './get-reflect-type';

export function injectService<T>(target: Object, key: Key, meta: InjectableMeta<T>): void {
  let localInjector: Injector;
  const name: string = key.toString();
  const cachedId: string = `#_${name}__service`;
  const classRef: ClassRef<T> = getReflectType<T>(target, key);

  if (meta) {
    const factory = meta.ɵfac;

    meta.ɵfac = () => {
      const instance = factory(target.constructor as any);
      localInjector = directiveInject(INJECTOR);
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
      get(): Type<T> {
        if (this[cachedId]) {
          return this[cachedId];
        }

        try {
          if (!localInjector) {
            localInjector = directiveInject(INJECTOR) || createInjector(INJECTOR);
          }

          this[cachedId] = localInjector?.get<T>(classRef) || directiveInject<T>(classRef);
        } catch (e) {}

        return this[cachedId];
      }
    }
  });
}
