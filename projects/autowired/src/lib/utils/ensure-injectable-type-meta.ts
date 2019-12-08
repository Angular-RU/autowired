import { InjectableMeta } from '../interfaces/internals';

export function ensureInjectableTypeMeta<T>(target: Object): InjectableMeta<T> {
  console.dir(target.constructor);
  return ((target.constructor as any) as InjectableMeta<T>) || null;
}
