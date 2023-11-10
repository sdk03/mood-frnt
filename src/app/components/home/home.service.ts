import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  baseURL = 'http://139.59.49.158'

  constructor(private http:HttpClient) { }

  getMoods(){

    return this.http.get(`${this.baseURL}`);

  }

  dataToSend:any

  updateMood(moodObject:any){
    this.dataToSend = {"id":moodObject.userID,"mood":moodObject.userCurrentMood,"remarks":moodObject.userSelectedRemarks}
    console.log(this.dataToSend.remarks)

    return this.http.post(`${this.baseURL}/updateMood`,this.dataToSend,{})
  }
}
