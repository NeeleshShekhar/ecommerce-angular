import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient ) { }

url:string='https://localhost:7126/api/'
  postCategory(data:any){
    return this.http.post(`${this.url}Categories`,data)

  }
  getCategory(){
    return this.http.get(`${this.url}Categories`)
  }
  updateCategory(id:any,data:any){
    return this.http.put(`${this.url}Categories/${id}`,data)
  }
  deleteCategory(id:any){
    return this.http.delete(`${this.url}Categories/${id}`)
  }

  getProducts(){
    return this.http.get(`${this.url}Products`)
  }

  addProduct(data:any){
    return this.http.post(`${this.url}Products`,data)
  }
  updateProduct(id:any,data:any){
    return this.http.put(`${this.url}Products/${id}`,data)
  }
  deleteProduct(id:any){
    return this.http.delete(`${this.url}Products/${id}`)
  }
  getOffer(){
    return this.http.get(`${this.url}Offers`)
  }

  addOffers(data:any){
    return this.http.post(`${this.url}Offers`,data)
  }
  updateOffer(id:any,data:any){
    return this.http.put(`${this.url}Offers/${id}`,data)
  }
  deleteOffer(id:any){
    return this.http.delete(`${this.url}Offers/${id}`)
  }
  loginAdmin(data:any){
    return this.http.get(`${this.url}users/valiadate?email=${data.email}&password=${data.password}`)
  }
  getProductsByCatId(id:any){
    return this.http.get(`${this.url}Products/getProdductByCategory/${id}`)
  }

  addToCart(data:any){
   return this.http.post(`${this.url}Carts`,data)
  }
  updateCart(data:any,id:any){
    return this.http.put(`${this.url}Carts/${id}`,data)
  }
  getCartByUserId(id:any){
    return this.http.get(`${this.url}Carts/getCartByUserId/${id}`)
  }
}
