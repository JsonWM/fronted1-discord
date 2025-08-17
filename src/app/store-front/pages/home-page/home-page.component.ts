import { ProductsService } from './../../../products/services/products.service';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit{
  ngOnInit(): void {this.productService.getProducts().subscribe()} 

  productService = inject(ProductsService);
  values = this.productService.products;

}
