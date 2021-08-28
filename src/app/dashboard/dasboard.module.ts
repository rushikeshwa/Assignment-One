import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent } from './icon/icon.component';

import { MapsComponent } from './aother/maps/maps.component';
import { NotificationComponent } from './aother/notification/notification.component';
import { UserProfileComponent } from './aother/user-profile/user-profile.component';
import { TableComponent } from './aother/table/table.component';
import { TypographyComponent } from './aother/typography/typography.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

// import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
    declarations: [
        IconComponent,
        MapsComponent,
        NotificationComponent,
        UserProfileComponent,
        TableComponent,
        TypographyComponent

    ],
    imports: [
        CommonModule,
        DashboardRoutingModule
    ],
      providers: [],
})

export class DashboardModule{

}