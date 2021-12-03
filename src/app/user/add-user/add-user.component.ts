import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StrapiTestService } from 'src/app/shared/services/strapi-test.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private api: StrapiTestService) { }
  addNewUserForm=new FormGroup({
    username:new FormControl(''),
    email:new FormControl(''),
    provider:new FormControl('')
  })

  ngOnInit(): void {
  }
  addNewUser(){
    this.api.addNewUsers(this.addNewUserForm.value).subscribe((result)=>{
        console.log(result);
    });
  }
}
