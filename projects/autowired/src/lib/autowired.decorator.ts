import 'reflect-metadata';
import { InjectionToken, Injector, Type } from '@angular/core';
import { BeanInjector } from './bean-injector.service';

export function Autowired(token?: Type<unknown> | InjectionToken<unknown>): PropertyDecorator {
  return (target: any, key: string) => {
    const type: Type<unknown> = Reflect.getMetadata('design:type', target, key);

    Object.defineProperty(target, key, {
      configurable: false,
      get() {
        const injector: Injector = BeanInjector.getContext();
        return injector.get(token || type);
      }
    });
  };
}
