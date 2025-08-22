import { Component, inject} from '@angular/core';
import { ProductsService } from '../../../products/services/products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-page',
  imports: [RouterLink],
  templateUrl: './categories-page.component.html',
})
export class CategoriesPageComponent {


  productService = inject(ProductsService);

  categories = this.productService.categories;



}
