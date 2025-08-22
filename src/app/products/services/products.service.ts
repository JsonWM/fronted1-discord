import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ProductsResponse } from '../interfaces/products.interface';
import { CategoryResponse } from '../interfaces/category.interface';

const API = "http://127.0.0.1:8000"


@Injectable({ providedIn: 'root' })
export class ProductsService {
    constructor() {
        this.getCategories();
        this.getProducts()
    }
    http = inject(HttpClient);

    products = signal<ProductsResponse[]>([]);
    categories = signal<CategoryResponse[]>([]);

    getProducts() {
        return this.http.get<ProductsResponse[]>(`${API}/products/get_all`).subscribe(value => this.products.set(value))
    }
    getCategories() {
        return this.http.get<CategoryResponse[]>(`${API}/categories/get_all`).subscribe(value => {
            this.categories.set(value)
        })
    }

    getProductsByCategory(id: number): Observable<ProductsResponse[]> {
        return this.http.get<ProductsResponse[]>(`${API}/products/get_by_category/${id}`);
    }



}