import { Component, OnInit } from "@angular/core";
import {UsersPermissionsUser } from 'src/app/shared/constants/AllModel';
import { UserPermissionUrl } from 'src/app/shared/constants/AllUrl';
import { StrapiTestService } from 'src/app/shared/services/strapi-test.service';

@Component({
    selector:'app-user',
    templateUrl:'./user.component.html'
})

export class UserComponent implements OnInit{
    
    userModel = Array<UsersPermissionsUser>();

    constructor( private apiService:StrapiTestService){ }

    ngOnInit(): void {
      this.getAllUsers();
    }
    getAllUsers(){
        this.apiService.getRequest(UserPermissionUrl ).subscribe((data:any)=>{
            this.userModel=data;
            console.log(this.userModel);
        })
    }
}