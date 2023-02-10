import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/components/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name: null,
    price: null
  }

  constructor(
    private router: Router, 
    private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productService.showOnConsole("tela update...");

    const id = +this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product => {
      this.product = product;
    });
  }

  updateProduct(): void {
    //subscribe = notifica quando a resposta chegar
    this.productService.update(this.product).subscribe( () => {
      this.productService.showMessage("Operação atualizada com sucesso!");
      this.router.navigate(['/products'])
    });; 
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
