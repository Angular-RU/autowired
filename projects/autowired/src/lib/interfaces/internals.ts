export interface InjectableMeta<T> {
  ɵfac: (...args: any[]) => any;
}

export type Key = string | symbol;

export type ClassRef<T = any> = new (...args: any[]) => T;
