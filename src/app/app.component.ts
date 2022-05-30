import { Component, VERSION } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  Userdata: any = [];
  getdata(data: NgForm) {
    console.log(data);
    this.Userdata = data;
  }
}
