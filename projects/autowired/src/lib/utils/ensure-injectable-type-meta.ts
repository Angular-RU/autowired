import { InjectableMeta } from '../interfaces/internals';

export function ensureInjectableTypeMeta<T>(target: Object): InjectableMeta<T> {
  return ((target.constructor as any) as InjectableMeta<T>) || null;
}
