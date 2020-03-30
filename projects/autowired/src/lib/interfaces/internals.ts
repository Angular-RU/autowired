export interface InjectableMeta<T> {
  ['ɵprov']: (...args: any[]) => any;
  ['ɵfac']: (...args: any[]) => any;
  ['ɵcmp']: (...args: any[]) => any;
}

export type Key = string | symbol;

export type ClassRef<T = any> = new (...args: any[]) => T;
