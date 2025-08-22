import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { ProductsService } from './../../../products/services/products.service';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home-page',
  imports: [TitleCasePipe, CurrencyPipe, RouterLink],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  productService = inject(ProductsService);

}
