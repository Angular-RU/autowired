import { InjectionToken } from '@angular/core';
import { Key } from '../interfaces/internals';
import { injectToken } from '../utils/inject-token';

export function Qualifier<T = any>(token: InjectionToken<T>): PropertyDecorator {
  return (target: Object, key: Key) => {
    injectToken(target, key, token);
  };
}
