
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Validators, FormBuilder, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';



@Component({
  selector: 'app-view-details-modal',
  templateUrl: './view-details-modal.component.html',
  styleUrls: ['./view-details-modal.component.scss'] ,
  encapsulation:ViewEncapsulation.None
})
export class ViewDetailsModalComponent implements OnInit {

  constructor(
    private _fb: FormBuilder,

    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data) {
    console.log(this.data, "data");
  }


  createForm: FormGroup;
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.createForm = this._fb.group({
      name: [''],
      phone: [''],
      email: [''],
    })
    this.createForm.patchValue(this.data)
  }


  submitModal() {
    this.dialogRef.close(this.createForm.value)
  }


}