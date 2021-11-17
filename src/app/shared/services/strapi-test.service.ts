import { Injectable } from '@angular/core';
import { MainURL } from '../constants/configUrl';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StrapiTestService {
  baseUrl=MainURL.HostUrl;

  constructor(private http:HttpClient) { }


  getRequest(url: any){
    return this.http.get(this.baseUrl + url)
  }
  postRequest(){

  }
  getCurrentUser(url: any,id: any){
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  deleteRequest(id:any){
    // console.log(`${this.baseUrl}${id}`);
    return this.http.delete(`${this.baseUrl}/users/${id}`);
  }
}
