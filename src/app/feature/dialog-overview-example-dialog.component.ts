import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AppService } from '../app.service';
import { Autowired, Qualifier } from '@angular-ru/autowired';

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.component.html'
})
export class DialogOverviewExampleDialogComponent implements OnInit {
  @Autowired() public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>;
  @Qualifier(MAT_DIALOG_DATA) public data: any;
  @Autowired() public app: AppService;

  ngOnInit() {
    console.log(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}