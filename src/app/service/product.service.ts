import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { IProduct } from '../interface/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getAllProducts():Observable<any>{
    return this.http.get(`http://localhost:3000/products`)
  }
  addProduct(product:IProduct):Observable<any>{
    return this.http.post(`http://localhost:3000/products`, product)
  }
  deleteProduct(id:any):Observable<any>{
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }
  getProductById(id:any):Observable<any>{
    return this.http.get(`http://localhost:3000/products/${id}`)
  }
  updateProduct(product:IProduct):Observable<any>{
    return this.http.patch(`http://localhost:3000/products/${product.id}`,product)
  }
}
