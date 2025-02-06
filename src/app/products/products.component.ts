import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, CommonModule, HttpClientModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productsList: IProduct[] = [];

  constructor(private _apiService: ApiService){}

  ngOnInit(): void {
    this._apiService.getAllProducts().subscribe(data => {
      console.log(data);
      this.productsList = data;
    })
  }

}
