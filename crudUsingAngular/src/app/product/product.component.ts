import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  idToEdit=-1;

  myForm = new FormGroup({
    id: new FormControl(''),
    ProductName: new FormControl(''),
    ProductPrice:new FormControl(''),
    ProductImage: new FormControl('')
  });

  insert(){
    if(this.idToEdit<0){
      this.products.push(<Product>this.myForm.value);
    }
    else{
      this.products[this.idToEdit]=<Product>this.myForm.value;
    }
    this.myForm.controls.id.setValue('');
    this.myForm.controls.ProductName.setValue('');
    this.myForm.controls.ProductPrice.setValue('');
    this.myForm.controls.ProductImage.setValue('');
    this.idToEdit=-1;
  }

  delete(i:any){
    this.products.splice(i,1);
  }

  edit(i:any){
    this.idToEdit=i;
    this.myForm.controls.id.setValue(this.products[i].id);
    this.myForm.controls.ProductName.setValue(this.products[i].ProductName);
    this.myForm.controls.ProductPrice.setValue(this.products[i].ProductPrice);
    this.myForm.controls.ProductImage.setValue(this.products[i].ProductImage);
  }
  products:Product[]= [];
}
