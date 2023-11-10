import { Injectable } from '@angular/core';
import { HomeService } from '../home/home.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private homeService:HomeService,private http:HttpClient) { }

  baseURL:any = this.homeService.baseURL;

  loginService(uniqueID:any){

    return this.http.post(`${this.baseURL}/login`,{"password":uniqueID})

  }

  }
