import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsComponent } from './aother/maps/maps.component';
import { NotificationComponent } from './aother/notification/notification.component';
import { TableComponent } from './aother/table/table.component';
import { TypographyComponent } from './aother/typography/typography.component';
import { UserProfileComponent } from './aother/user-profile/user-profile.component';
import { IconComponent } from './icon/icon.component';

const routes: Routes = [
  {path:'icon', component:IconComponent},
  {path:'maps',component:MapsComponent},
  {path:'notification',component:NotificationComponent},
  {path:'user',component:UserProfileComponent},
  {path:'table',component:TableComponent},
  {path:'typography',component:TypographyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
