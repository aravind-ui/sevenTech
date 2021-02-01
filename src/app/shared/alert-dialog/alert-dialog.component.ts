import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from './alert-dialog.model';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent implements OnInit {

  title = 'Alert';
  message = '';
  closeButtonText = 'OK';

  constructor(
    public dialogRef: MatDialogRef<AlertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData | any) {
    dialogRef.disableClose = true;
    this.message = this.data.message;
    this.title = this.data.title;
  }
  ngOnInit() { }
  closeDialog() {
    this.dialogRef.close();
  }

}
