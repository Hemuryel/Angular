import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/components/product/product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: null,
    price: null
  }

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.showOnConsole("tela create...");
  }

  createProduct(): void {
    //subscribe = notifica quando a resposta chegar
    this.productService.create(this.product).subscribe( () => {
      this.productService.showMessage("Operação executada com sucesso!");
      this.router.navigate(['/products'])
    });; 
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
