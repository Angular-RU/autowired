import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatureComponent } from './feature.component';
import { FeatureService } from './feature.service';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [FeatureComponent, DialogOverviewExampleDialogComponent],
  providers: [FeatureService],
  imports: [
    FormsModule,
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule.forChild([{ path: '', component: FeatureComponent }])
  ]
})
export class FeatureModule {}
