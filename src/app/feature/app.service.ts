import { Injectable } from '@angular/core';
import { FeatureModule } from "./feature.module";

@Injectable({
  providedIn: FeatureModule
})
export class AppService {
  public hello(): string {
    return 'world';
  }
}
