import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/products';
import { ProductService } from 'src/app/service/product.service';
import {FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent {
  products!:IProduct[]
  constructor(private productSer:ProductService){
    this.productSer.getAllProducts().subscribe(data=>{
      this.products = data
    })
  }
  onHanndleRemove(id:any){
    this.productSer.deleteProduct(id).subscribe(()=>{
      this.products = this.products.filter(item=>item.id != id)
      console.log("Thành công");

    })
  }
}
