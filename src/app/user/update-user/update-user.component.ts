import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersPermissionsUser } from 'src/app/shared/constants/AllModel';
import { GetCurrentUer } from 'src/app/shared/constants/AllUrl';
import { StrapiTestService } from 'src/app/shared/services/strapi-test.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  currentUser:any;

  updateUser= new FormGroup({
    name:new FormControl(),
    email:new FormControl(),
    author:new FormControl()
  })
  constructor(private route:ActivatedRoute,  private apiService:StrapiTestService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
    this.apiService.getCurrentUser(this.route.snapshot.params.id).subscribe((result)=>{
      console.log(result);
      this.currentUser=result;

      this.updateUser=new FormGroup({
        name:new FormControl(result),
      })
    });
  }

  updateUserInfo(){
    
  }
}
