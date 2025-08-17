import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../../products/services/products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-page',
  imports: [RouterLink],
  templateUrl: './categories-page.component.html',
})
export class CategoriesPageComponent implements OnInit{
  ngOnInit(): void {this.productService.getCategories().subscribe()} 

  productService = inject(ProductsService);
  
  categories = this.productService.categories;



}
