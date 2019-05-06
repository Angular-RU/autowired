import { Injectable, Injector } from '@angular/core';

@Injectable()
export class BeanInjector {

  private static injector: Injector | null = null;

  constructor(injector: Injector) {
    BeanInjector.injector = injector;
  }

  public static getInjector(): never | Injector {
    if (!this.injector) {
      throw new Error(`You've forgotten to import \`BeanAccessibleModule\``);
    }

    return this.injector;
  }
}
