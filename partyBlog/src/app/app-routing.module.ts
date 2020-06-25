import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NewinputComponent } from './newinput/newinput.component';



const routes: Routes = [

 {
                path: "", component: BlogPageComponent
        },
        {
                path: "about", component: AboutComponent
        },
                {
                path: "contact", component: ContactComponent
        },
        {
                path: "newinput", component: NewinputComponent
        }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
