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

  addNewUsers(data:any){
    return this.http.post(this.baseUrl, data);

  }
  getAllUsers(url: any){
    return this.http.get(this.baseUrl + url)
  }
  postRequest(){

  }
  getCurrentUser(id: any){
    return this.http.get(`${this.baseUrl}/users/${id}`);
  }

  deleteUser(id:any){
    return this.http.delete(`${this.baseUrl}/users/${id}`);
  }
}
