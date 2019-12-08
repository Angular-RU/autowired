import { InjectionToken, ɵɵdirectiveInject as directiveInject } from '@angular/core';
import { Key } from '../interfaces/internals';

export function injectToken<T>(target: Object, key: Key, token: InjectionToken<T>): void {
  const name: string = key.toString();
  const hash: string = `#_${name}_token`;

  Object.defineProperties(target, {
    [hash]: {
      writable: true,
      enumerable: false,
      configurable: true
    },
    [name]: {
      enumerable: true,
      configurable: true,
      get(): T {
        if (this[hash]) {
          return this[hash];
        }

        this[hash] = directiveInject<T>(token);
        return this[hash];
      }
    }
  });
}
