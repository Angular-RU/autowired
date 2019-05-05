import { Injectable, Injector } from '@angular/core';

@Injectable()
export class BeanInjector {

  private static context: Injector | null = null;

  constructor(context: Injector) {
    BeanInjector.context = context;
  }

  public static getContext(): never | Injector {
    if (!this.context) {
      throw new Error(`You've forgotten to import \`BeanAccessibleModule\``);
    }

    return this.context;
  }
}
