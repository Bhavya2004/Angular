import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiProductService } from '../api-product.service';
import { Product } from '../product';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
  id=0;
  data:Product=new Product();

  constructor(private actRoute:ActivatedRoute,private api:ApiProductService){
    
  }

  ngOnInit(){
    this.id=this.actRoute.snapshot.params['id'];
    this.api.getProductById(this.id).subscribe((res:any)=>{
      this.data=res;
    })
  }
}
