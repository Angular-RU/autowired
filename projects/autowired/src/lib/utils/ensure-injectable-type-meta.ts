import {
  InjectableType,
  ɵComponentType as ComponentType,
  ɵDirectiveType as DirectiveType
} from '@angular/core';
import { InjectableMeta, PipeType } from '../interfaces/internals';

export function ensureInjectableTypeMeta<T>(target: Object): InjectableMeta<T> {
  return (
    (target.constructor as ComponentType<T>).ngComponentDef ||
    (target.constructor as DirectiveType<T>).ngDirectiveDef ||
    (target.constructor as PipeType<T>).ngPipeDef ||
    (target.constructor as InjectableType<T>).ngInjectableDef ||
    null
  );
}
