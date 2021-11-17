import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GetCurrentUer } from 'src/app/shared/constants/AllUrl';
import { StrapiTestService } from 'src/app/shared/services/strapi-test.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  updateUser= new FormGroup({
    name:new FormControl(),
    email:new FormControl(),
    author:new FormControl()
  })
  constructor(private route:ActivatedRoute,  private apiService:StrapiTestService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
    this.apiService.getCurrentUser(GetCurrentUer,this.route.snapshot.params.id).subscribe((result)=>{
      console.log(result);
    });
  }

  updateUserInfo(){
    
  }
}
