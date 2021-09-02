import { Injectable } from '@angular/core';
import { MainURL } from '../constants/configUrl';
import { HttpClient } from '@angular/common/http';


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
}
