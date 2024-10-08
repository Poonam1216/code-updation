import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent  {
  @Input() title: string;
  constructor(protected ref: NbDialogRef<DeleteDialogComponent>) { }


  dismiss() {
    this.ref.close();
  }

  sure() {
    this.ref.close(true);
  }

}
