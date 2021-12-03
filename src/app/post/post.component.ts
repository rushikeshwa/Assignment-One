import { Component, OnInit } from "@angular/core";
import {Posts } from 'src/app/shared/constants/AllModel';
import { PostsUrl } from 'src/app/shared/constants/AllUrl';
import { StrapiTestService } from 'src/app/shared/services/strapi-test.service';

@Component({
    selector:'app-post',
    templateUrl:'./post.component.html',

})

export class PostComponent implements OnInit{
   
    postModel:any;

    constructor(private apiService : StrapiTestService, ){  }
   
    ngOnInit(): void {
        this.getAllPosts();        
    }
    getAllPosts(){
        this.apiService.getAllUsers(PostsUrl).subscribe((data:any)=>{
            this.postModel=data.result;
            console.log(data);
            console.log(data[0]);
        })
    }
    
}