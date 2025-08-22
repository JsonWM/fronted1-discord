import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductsService } from './products/services/products.service';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, TitleCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'EcommerceDiscord';

  productService = inject(ProductsService);
}
