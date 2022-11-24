import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiProductService {

  constructor(private http:HttpClient) {}

  getAllProduct(){
    return this.http.get('https://63147740fc9dc45cb4edef01.mockapi.io/products');
  }

  getProductById(id:any){
    return this.http.get('https://63147740fc9dc45cb4edef01.mockapi.io/products/'+id);
  }
}
