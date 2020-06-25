import { Component, OnInit } from '@angular/core';
import { locations } from '../data';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

locations = locations

  constructor() { }

  ngOnInit(): void {
   }

}
