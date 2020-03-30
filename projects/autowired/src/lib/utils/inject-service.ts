import { INJECTOR, Injector, Type, ɵɵdirectiveInject as directiveInject } from '@angular/core';
import { ɵcreateInjector as createInjector } from '@angular/core';
import { ClassRef, InjectableMeta, Key } from '../interfaces/internals';
import { getReflectType } from './get-reflect-type';
import { isTesting } from '../testing/enable-test';
import { INJECTOR_TEST_BED } from '../tokens/running-test';

export function injectService<T>(target: Object, key: Key, meta: InjectableMeta<T>): void {
  let localInjector: Injector;
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

        console.log('this', this['__injector__'])

        return this[cachedId];
      }
    }
  });
}
