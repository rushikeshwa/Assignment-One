import { Component, OnInit } from "@angular/core";
import { UsersPermissionsUser } from 'src/app/shared/constants/AllModel';
import { UserPermissionUrl, DeleteUrl } from 'src/app/shared/constants/AllUrl';
import { StrapiTestService } from 'src/app/shared/services/strapi-test.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html'
})

export class UserComponent implements OnInit {

    userModel = Array<UsersPermissionsUser>();
    alert = false;
    constructor(private apiService: StrapiTestService) { }

    ngOnInit(): void {
        this.getAllUsers();
    }
    getAllUsers() {
        this.apiService.getAllUsers(UserPermissionUrl).subscribe((data: any) => {
            this.userModel = data;
            console.log(this.userModel);
        })
    }
    deleteUser(index: any) {
        console.log(index);
        this.alert = true;
        this.userModel.splice(index - 1, 1);
        this.apiService.deleteUser(index).subscribe((index) => {
            console.log(index);
        })
    }
    hideAlert() {
        this.alert = false;
    }
}