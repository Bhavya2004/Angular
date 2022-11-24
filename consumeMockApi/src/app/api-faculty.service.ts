import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiFacultyService {

  constructor(private http:HttpClient) {}

  getAllFaculty(){
    return this.http.get('https://63147740fc9dc45cb4edef01.mockapi.io/faculties');
  }

  getStudentById(id:any){
    return this.http.get('https://63147740fc9dc45cb4edef01.mockapi.io/faculties/'+id);
  }
}
