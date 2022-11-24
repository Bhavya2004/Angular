import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiStudentService {

  constructor(private http:HttpClient) {}

  getAllStudent(){
    return this.http.get('https://63147740fc9dc45cb4edef01.mockapi.io/students');
  }

  getStudentById(id:any){
    return this.http.get('https://63147740fc9dc45cb4edef01.mockapi.io/students/'+id);
  }
}
