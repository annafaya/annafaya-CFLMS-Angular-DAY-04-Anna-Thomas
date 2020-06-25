import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

 info = new FormGroup({
   firstName: new FormControl(''),
   lastName: new FormControl(''),
   age: new FormControl(''),
   email: new FormControl(''),
   question: new FormControl('')
 });

  constructor() { }

  ngOnInit(): void {
  }
 onSubmit(){
 // to take the values from the form you can select the property that have the formGroup and then just add .value
   var a = this.info.value;
   console.log(a)

 }
}
