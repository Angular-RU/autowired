import { InjectableMeta, Key } from '../interfaces/internals';
import { injectService } from '../utils/inject-service';
import { ensureInjectableTypeMeta } from '../utils/ensure-injectable-type-meta';

export function Autowired<T = any>(): PropertyDecorator {
  return (target: Object, key: Key) => {
    let meta: InjectableMeta<T> = ensureInjectableTypeMeta(target);

    if (meta) {
      // Note: AOT
      injectService(target, key, meta);
    } else {
      Promise.resolve().then(() => {
        // Note: JIT
        meta = ensureInjectableTypeMeta(target);
        injectService(target, key, meta);
      });
    }
  };
}
