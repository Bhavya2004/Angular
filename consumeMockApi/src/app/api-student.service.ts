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

  deleteStudentById(id:any){
    return this.http.delete('https://63147740fc9dc45cb4edef01.mockapi.io/students/'+id);
  }

  insert(form:any){
    return this.http.post('https://63147740fc9dc45cb4edef01.mockapi.io/students',form);
  }

  update(id:any,form:any){
    return this.http.put('https://63147740fc9dc45cb4edef01.mockapi.io/students/'+id,form); 
  }
}
