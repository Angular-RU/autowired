import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatureComponent } from './feature.component';
import { FeatureService } from './feature.service';
import { MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FeatureComponent, DialogOverviewExampleDialogComponent],
  providers: [FeatureService],
  imports: [
    FormsModule,
    CommonModule,
    MatDialogModule,
    RouterModule.forChild([{ path: '', component: FeatureComponent }])
  ]
})
export class FeatureModule {}
