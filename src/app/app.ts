import { Component, inject, output, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProductsService } from './products/services/products.service';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, TitleCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'EcommerceDiscord';
  productService = inject(ProductsService);
  route = inject(Router)



  search(valuetxt:string){
    this.route.navigateByUrl(`/products/${valuetxt}`)

  }
 


}
