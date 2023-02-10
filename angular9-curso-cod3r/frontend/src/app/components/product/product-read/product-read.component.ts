import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[];
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(
      (products: Product[]) => {
        this.products = products
        console.log(products)
      }, (error: any) => {
        console.log(error);
      });
  }

  /*ngOnInit(): void {
    this.productService.read().subscribe(
      (data: Product[]) => {
        this.products = data
        console.log(data)
      }, (error: any) => {
        console.log(error);
      });
  }*/

  /*ngOnInit(): void {
    this.productService.read().subscribe(
      products => {
        this.products = data
        console.log(data)
      });
  }*/
}
