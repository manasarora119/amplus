import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { AddModalComponent } from './modals/add-modal/add-modal.component';
import { MatButtonModule } from '@angular/material/button';
// import {MatIn} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ViewDetailsModalComponent } from './modals/view-details-modal/view-details-modal.component';
import {MatIconModule} from '@angular/material/icon';

// import { ToastrModule } from 'ngx-toastr';
// 
@NgModule({
  declarations: [
    AppComponent,
    AddModalComponent,
    ViewDetailsModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    // ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  entryComponents: [AddModalComponent ,ViewDetailsModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
