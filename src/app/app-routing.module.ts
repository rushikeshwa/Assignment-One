import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPanelComponent } from './dashboard/main-panel/main-panel.component';

const routes: Routes = [

  // {path:'',redirectTo:"dashboard",pathMatch:'full'},
  {path:'',redirectTo:"auth",pathMatch:'full'},
  { path:'auth', loadChildren: () => import('./auth/auth.module').then(auth => auth.AuthModule)},
  
  { path:'dash', loadChildren: () => import('./dashboard/dasboard.module').then(m => m.DashboardModule) },
  { path:'post', loadChildren: () => import('./post/post.module').then(post => post.PostModule) },
  { path:'user', loadChildren: () => import('./user/user.module').then(user => user.UserModule) },


  {path:'dashboard',component:MainPanelComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
