import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrl: './marks.component.css'
})
export class MarksComponent {

  SaveForm(myform: any):void {
     console.log(myform)
  }
}
