import { INJECTOR, Injector, Type, ɵɵdirectiveInject as directiveInject } from '@angular/core';
import { getReflectType } from './get-reflect-type';
import { ClassRef, InjectableMeta, Key } from '../interfaces/internals';

export function injectService<T>(target: Object, key: Key, meta: InjectableMeta<T>): void {
  let localInjector: Injector;
  const name: string = key.toString();
  const hash: string = `#${name}__service`;
  const classRef: ClassRef<T> = getReflectType<T>(target, key);

  if (meta) {
    const factory = meta.factory;
    meta.factory = () => {
      const instance = factory(target.constructor as any);
      localInjector = directiveInject(INJECTOR);
      return instance;
    };
  }

  Object.defineProperties(target, {
    [hash]: {
      writable: true,
      enumerable: false,
      configurable: true
    },
    [name]: {
      enumerable: true,
      configurable: true,
      get(): Type<T> {
        if (this[hash]) {
          return this[hash];
        }

        try {
          this[hash] = localInjector.get<T>(classRef);
        } catch {
          this[hash] = directiveInject<T>(classRef);
        }

        return this[hash];
      }
    }
  });
}
