import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  array: any = [];
  counter: number;
  A = 0
  B = 0
  rev: any;
  constructor() {
    this.counter = 0
    this.array = []
    for (let i = 0; i < 10; i++) {
      this.array.push(Math.floor(Math.random() * 10) + 1)
    }
    // this.array.push(Math.floor(Math.random() * 6) + 1  )
    console.log(this.array, "this.array");
  }
  check(i) {
    console.log("check ",i);
    
    // if (rev) {
    //   this.rev = this.array[this.array.length - 1];
    //   this.array.pop()
    // } else {
    //   this.rev = this.array[0];
    //   this.array.slice(0)
    // }

    let type;
    if (this.counter % 2 == 0) {
      type = 'A';
    } else {
      type = 'B';
    }
    this[type] = this[type] + this.array[i];
    this.counter++;
    this.array = this.array.slice(0, i).concat(this.array.slice(i + 1, this.array.length))
  
  }

}
