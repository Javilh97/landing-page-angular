import { CommonModule, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{

  product?: IProduct;
  productList: IProduct[] = [];
  loading: boolean = true;
  color: string = '';
  constructor(
    private _route: ActivatedRoute,
    private _apiService: ApiService
  ){}

  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params: Params) => {
        this._apiService.getProductById(Number(params['productId'])).subscribe({
          next: (data: IProduct) => {
            this.product = data;
            this.color = this.product?.price as number <= 10 ? 'red' : '';
            this.loading = false;
            console.log(this.product);
          },
          error: (error: any) => {
            console.error(error);
          }
        });
      }, error: (err: any) => {
        console.error(err);
        this.loading = false;
      },
    })
  }
}
