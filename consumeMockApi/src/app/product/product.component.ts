import { Component } from '@angular/core';
import { ApiProductService } from '../api-product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  data:Product[]=[];

  constructor(private api:ApiProductService){}

  ngOnInit(){
    this.api.getAllProduct().subscribe((res:any)=>{
      this.data=res;
      console.log(this.data);
    })
  }
}
