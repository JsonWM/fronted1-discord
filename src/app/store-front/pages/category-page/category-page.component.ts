import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { ProductsService } from '../../../products/services/products.service';

@Component({
  selector: 'app-category-page',
  imports: [RouterLink],
  templateUrl: './category-page.component.html',
})
export class CategoryPageComponent {


  productsService = inject(ProductsService)
  activateRoute = inject(ActivatedRoute);


  category = this.activateRoute.snapshot.params['id']

   productsResource = rxResource({
    params: () => ({ page: this.category}),
    stream: ({ params }) => {
      return this.productsService.getProductsByCategory(params.page)
    }
  })

}
