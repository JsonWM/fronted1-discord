import { Component, computed, inject, output, signal } from '@angular/core';
import { ProductsService } from '../../../products/services/products.service';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-page',
  imports: [CurrencyPipe],
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {

  productService = inject(ProductsService);

  route = inject(ActivatedRoute)

  value = toSignal(this.route.params.pipe(map(params=> params['value'])));


  productResource = rxResource({
    params: () => ({ query: this.value() }),
    stream: ({ params }) => {
      console.log(params.query);
      
      return this.productService.search(params.query)
    }
  })

}
