import { ModuleWithProviders, NgModule, Self } from '@angular/core';
import { BeanInjector } from './bean-injector.service';

@NgModule()
export class BeanAccessibleModule {
  constructor(@Self() private beanInjector: BeanInjector) {}

  public static forRoot(): ModuleWithProviders<BeanAccessibleModule> {
    return {
      ngModule: BeanAccessibleModule,
      providers: [BeanInjector]
    };
  }
}
