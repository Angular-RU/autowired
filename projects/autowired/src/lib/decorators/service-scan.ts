import { InjectableMeta } from '../interfaces/internals';
import { ensureInjectableTypeMeta } from '../utils/ensure-injectable-type-meta';
import { NG_FACTORY_META_KEY, NG_INJECTOR } from '../tokens/private-api';
import { INJECTOR, ɵɵdirectiveInject as directiveInject } from '@angular/core';

export function ServiceScan() {
  return function<T extends { new (...args: any[]): {} }>(constructor: T) {
    let meta: InjectableMeta<T> = ensureInjectableTypeMeta(constructor.prototype);
    const factory = meta.ɵfac;

    const ensure = (template): PropertyDescriptor => ({
      configurable: true,
      writable: true,
      enumerable: true,
      value: () => {
        const instance = factory(template);
        instance[NG_INJECTOR] = directiveInject(INJECTOR);
        return instance;
      }
    });

    if (meta.ɵprov) {
      Object.defineProperty(meta.ɵprov, 'factory', ensure(constructor));
    } else {
      Object.defineProperty(meta, NG_FACTORY_META_KEY, ensure(constructor));
    }

    return class extends constructor {};
  };
}
