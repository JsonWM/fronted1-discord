import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ProductsService } from '../../../products/services/products.service';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-category-page',
  imports: [CurrencyPipe, TitleCasePipe],
  templateUrl: './category-page.component.html',
})
export class CategoryPageComponent {


  productsService = inject(ProductsService)
  activateRoute = inject(ActivatedRoute);


  categoryParam = toSignal(this.activateRoute.params.pipe(map(params => params['id'])));

  category = computed(() => {
    const found = this.productsService.categories().find(category => category.id == this.categoryParam())
    return found?.nombre;
  }
  )
  productsResource = rxResource({
    params: () => ({ page: this.categoryParam() }),
    stream: ({ params }) => {
      return this.productsService.getProductsByCategory(params.page)
    }
  })

}
