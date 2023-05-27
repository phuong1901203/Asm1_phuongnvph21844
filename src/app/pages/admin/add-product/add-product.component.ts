import { Component } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interface/products';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productForm=this.formBuilder.group({
    name:['',[Validators.required,Validators.minLength(4)]],
    price:[0],
    image:[""]
  })
  constructor(
    private formBuilder: FormBuilder,
    private productSer:ProductService,
    private navigate:Router
    ){}
  onHandleAdd(){
    if(this.productForm.valid){
      const newProduct:IProduct ={
        name:this.productForm.value.name||"",
        price:this.productForm.value.price||0,
        image:this.productForm.value.image||"",
      }
      this.productSer.addProduct(newProduct).subscribe(data=>{
        console.log("Thành công",data);
        this.navigate.navigate(['admin'])


      })
    }
  }
}
