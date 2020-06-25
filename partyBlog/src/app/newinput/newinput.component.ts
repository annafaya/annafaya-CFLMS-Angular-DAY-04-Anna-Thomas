import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { locations } from '../data';

@Component({
  selector: 'app-newinput',
  templateUrl: './newinput.component.html',
  styleUrls: ['./newinput.component.css']
})
export class NewinputComponent implements OnInit {

	newPost = new FormGroup({
	name: new FormControl(''),
	img: new FormControl(''),
   adress: new FormControl(''),
   description: new FormControl(''),
   website: new FormControl(''),
 });

locations = locations;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
 // to take the values from the form you can select the property that have the formGroup and then just add .value
   var a = this.newPost.value;
   console.log(a)
   locations.push(a)
 }

}
