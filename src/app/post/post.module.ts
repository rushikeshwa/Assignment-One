import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PostComponent } from './post.component';
import { NewComponent } from './new/new.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    PostComponent,
    NewComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    MaterialModule
  ]
})
export class PostModule { }
