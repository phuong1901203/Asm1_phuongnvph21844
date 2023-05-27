import { Component } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { IProduct } from 'src/app/interface/products';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  product!:IProduct
  productForm=this.formBuilder.group({
    name:['',[Validators.required,Validators.minLength(4)]],
    price:[0],
    image:[""]
  })
  constructor(
    private formBuilder: FormBuilder,
    private productSer:ProductService,
    private router:ActivatedRoute,
    private navigate:Router

    ){
      this.router.paramMap.subscribe(param=>{
        const id = Number(param.get("id"))
        this.productSer.getProductById(id).subscribe(product=>{
          this.product = product
          this.productForm.patchValue({
            name:product.name,
            price:product.price,
            image:product.image,

          })
        })
      })
    }
    onHandleUpdate(){
      if(this.productForm.valid){
        const newProduct:IProduct={
          id:this.product.id,
          name:this.productForm.value.name||"",
          price:this.productForm.value.price||0,
          image:this.productForm.value.image||"",
        }
        this.productSer.updateProduct(newProduct).subscribe(data=>{
          console.log("Thành công",data);
          this.navigate.navigate(['admin'])

        })
      }
    }
}
