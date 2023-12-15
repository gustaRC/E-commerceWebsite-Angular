import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsType } from '../interface/products-type';

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {

  private url: string = 'https://fakestoreapi.com/products'

  constructor(private http: HttpClient) { }

  getList(): Observable<Array<ProductsType>> {
    return this.http.get<Array<ProductsType>>(this.url).pipe(
      res => res,
      err => err
    )
  }

}
