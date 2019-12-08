import { ClassRef } from '../interfaces/internals';

export function getReflectType<T>(target: Object, propertyKey: string | symbol): ClassRef<T> {
  if (!(Reflect as any).getMetadata) {
    throw new Error(`You forgot add "import 'reflect-metadata';" to polyfills.ts`);
  }

  return (Reflect as any).getMetadata('design:type', target, propertyKey);
}
