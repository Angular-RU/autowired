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
  const invalidInjection: boolean = !meta.ɵfac && !isTesting();

  if (invalidInjection) {
    throw new Error(
      'Please use AOT for @Autowired() or use enableInjectionTesting() for test'
    );
  }

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
        if (isTesting()) {
          return window[INJECTOR_TEST_BED].inject(classRef);
        }

        if (this[cachedId]) {
          return this[cachedId];
        }

        try {
          if (!localInjector) {
            localInjector = directiveInject(INJECTOR) || createInjector(INJECTOR);
          }

          this[cachedId] = localInjector?.get<T>(classRef) || directiveInject<T>(classRef);
        } catch {}

        return this[cachedId];
      }
    }
  });
}
