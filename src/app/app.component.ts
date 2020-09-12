import { Component } from '@angular/core';
import { AddModalComponent } from './modals/add-modal/add-modal.component';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewDetailsModalComponent } from './modals/view-details-modal/view-details-modal.component';
// import { ToastrService } from 'ngx-toastr';
// import { DynamicGrid } from '../grid.model';


const ELEMENT_DATA: any[] = [
  { name: 'Manas', phone:9090909090, email: 'manas@mm.com' },
  { name: 'Kumar', phone:9999999998, email:  'manas@mm.com'},
  { name: 'Arora', phone: 9999999999, email:  'manas@mm.com'},

];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'rx-logix';
  data = [];

  dataSource: any;
  constructor(public dialog: MatDialog ) {
    this.dataSource = ELEMENT_DATA;
  }

  editRow(i) {
   const dialogRef = this.dialog.open(ViewDetailsModalComponent, {
      width: '350px',
      height: '400px',
      data: this.dataSource[i]
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result  && !(
        result.name == this.dataSource[i].name &&
        result.phone == this.dataSource[i].phone &&
        result.email == this.dataSource[i].email
      )
      ) {
        this.dataSource[i] = result
      }
    });
  }
  add() {
    const dialogRef = this.dialog.open(AddModalComponent, {
      width: '350px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.name && result.email) {
        this.dataSource.push(result)

      }
    });
  }

  deleteRow(i) {
    console.log(i);
    if(this.dataSource.length==1){
 
      // this.toast.success('Hello world!', 'Toastr fun!');
      return
    }
    this.dataSource.splice(i, 1)
  }
  ngOnInit() {
  }

}

