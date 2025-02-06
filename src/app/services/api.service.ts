import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProduct } from '../models/product.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL = 'https://fakestoreapi.com/products';
  private userURL = 'https://fakestoreapi.com/users';

  constructor(private _http: HttpClient) { }

  public getAllProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this.baseURL);
  }

  public getProductById(id: number): Observable<IProduct> {
    return this._http.get<IProduct>(`${this.baseURL}/${id}`);
  }

  public getAllCategories(): Observable<Category[]>{
    return this._http.get<Category[]>(`${this.baseURL}/categories`);
  }

  public newProduct(product: IProduct): Observable<IProduct>{
    return this._http.post<IProduct>(`${this.baseURL}`, product);
  }

  public updateProduct(id: number, product: IProduct): Observable<IProduct>{
    return this._http.put<IProduct>(`${this.baseURL}/${id}`, product);
  }

  public deleteProduct(id: number): Observable<IProduct>{
    return this._http.delete<IProduct>(`${this.baseURL}/${id}`);
  }

  //Peticiones para usuarios
  public getAllUser(): Observable<User>{
    return this._http.get<User>(`${this.userURL}`);
  }

  public getUserById(id: number): Observable<User>{
    return this._http.get<User>(`${this.userURL}/${id}`);
  }

  public newUser(user: User): Observable<User>{
    return this._http.post<User>(`${this.userURL}`, user);
  }

  public updateUser(id: number, user: User): Observable<User>{
    return this._http.put<User>(`${this.userURL}/${id}`, user);
  }

  public deleteUser(id: number): Observable<User>{
    return this._http.delete<User>(`${this.userURL}/${id}`);
  }

}
