import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiProductService } from '../api-product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  id=-1;
  btnName="Add Product";
  headingName="Add New Product";

  constructor(private api:ApiProductService,private router:Router,private actRou:ActivatedRoute){

  }

  myForm= new FormGroup(
  {
    name: new FormControl(''),
    avatar: new FormControl(''),
    description: new FormControl(''),
    amount: new FormControl('')
  }
);
ngOnInit(){
  if(this.actRou.snapshot.params['id']!=null){
    this.btnName="Edit Product";
    this.headingName="Edit Product";
    this.id=this.actRou.snapshot.params['id'];
    this.api.getProductById(this.id).subscribe((res:any)=>{
      this.myForm.controls.name.setValue(res.name);
      this.myForm.controls.amount.setValue(res.amount);
      this.myForm.controls.avatar.setValue(res.avatar);
      this.myForm.controls.description.setValue(res.description);
    })
  }
}

insert(){
  if(this.id>0){
    this.api.update(this.id,this.myForm.value).subscribe((res)=>{
      this.router.navigate(['/product']);
    });
  }
  else{
    this.api.insert(this.myForm.value).subscribe((res)=>{
      this.router.navigate(['/product']);
    });
  }
  
}
}
