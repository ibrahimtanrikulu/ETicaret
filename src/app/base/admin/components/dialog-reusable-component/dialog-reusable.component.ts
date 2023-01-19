import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IDialogModel } from 'src/app/model/dialog';

@Component({
  selector: 'app-dialog-animation',
  templateUrl: './dialog-reusable.component.html',
  styleUrls: ['./dialog-reusable.component.scss'],
})
export class DialogReusableComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IDialogModel,
    public dialogRef: MatDialogRef<DialogReusableComponent>
  ) {}
}
