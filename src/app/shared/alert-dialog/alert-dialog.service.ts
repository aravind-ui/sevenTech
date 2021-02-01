import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from './alert-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AlertDialogService {

  dialogRef: any;
  constructor(private dialog: MatDialog) { }

  show(dialogMessage: string, dialogTitle?: string) {
    this.dialogRef = this.dialog.open(AlertDialogComponent, {
      width: '350px',
      data: { message: dialogMessage, title: dialogTitle}
    });
  }
}
