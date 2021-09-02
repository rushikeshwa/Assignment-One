import { Component , OnInit} from '@angular/core';
import { StrapiTestService } from './shared/services/strapi-test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Assignment-One';

  
  constructor (private api:StrapiTestService, private http:HttpClient){

  }
  ngOnInit(): void {

  }

  
}
