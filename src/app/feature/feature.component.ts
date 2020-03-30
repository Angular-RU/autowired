import { AfterViewInit, Component } from '@angular/core';
import { Autowired, ServiceScan } from '@angular-ru/autowired';
import { FeatureService } from './feature.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog.component';

@ServiceScan()
@Component({
  selector: 'feature',
  templateUrl: './feature.component.html'
})
export class FeatureComponent implements AfterViewInit {
  @Autowired() public ser: FeatureService;
  @Autowired() public dialog: MatDialog;

  public animal: string;
  public name: string;

  public ngAfterViewInit(): void {
    console.log('init', this.ser.invoke());
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.animal = result;
    });
  }
}
