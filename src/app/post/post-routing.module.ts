import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './new/new.component';
import { PostComponent } from './post.component';

const routes: Routes = [
  {path:'', component:PostComponent},
  {path:'add-new',component:NewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
