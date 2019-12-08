import {
  Type,
  ɵComponentDef as ComponentDef,
  ɵDirectiveDef as DirectiveDef,
  ɵPipeDef as PipeDef,
  ɵɵInjectableDef as InjectableDef
} from '@angular/core';

export interface PipeType<T> extends Type<T> {
  ngPipeDef: never;
}

export type InjectableMeta<T> =
  | ComponentDef<T>
  | DirectiveDef<T>
  | InjectableDef<T>
  | PipeDef<T>;

export type Key = string | symbol;

export type ClassRef<T = any> = new (...args: any[]) => T;
