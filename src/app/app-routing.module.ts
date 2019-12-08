import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          children: [
            {
              path: 'feature',
              loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)
            }
          ]
        }
      ],
      { useHash: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
