
import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Validators, FormBuilder, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';



@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AddModalComponent implements OnInit {

  constructor(
    private _fb:FormBuilder,

    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data) {}


  createForm: FormGroup;
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(){

    this.createForm = this._fb.group({
      name:[''],
      phone: [''],
      email: ['' ],
    })

  }

 
  submitModal(){
    this.dialogRef.close(this.createForm.value)
  }


}