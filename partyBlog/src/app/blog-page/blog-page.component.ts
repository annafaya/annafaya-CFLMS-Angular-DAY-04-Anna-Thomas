import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

locations = [
{
	name: 'Fledermaus', },
{ 
	name: 'Fluc', },
{
	name: 'Das Werk',
},
{   
	name: 'Grelle Forelle'
},
{
	name: 'Flex',
},
{
	name: 'Weberknecht',
}
]


  constructor() { }

  ngOnInit(): void {
   }

}
