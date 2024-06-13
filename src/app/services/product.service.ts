import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = `${environment.apiUrl}/product`;

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  getProductsByOwner(ownerId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/owner/${ownerId}`);
  }

  getProductsByCategory(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/category/${categoryId}`);
  }

  getProductsByBrand(brandId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/brand/${brandId}`);
  }

  searchProducts(params: any): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/search`, { params });
  }

  createProduct(product: Product): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}`, product);
  }

  updateProduct(id: number, product: Product): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  banProduct(id: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/ban/${id}`, {});
  }

  unbanProduct(id: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/unban/${id}`, {});
  }

  rateProduct(productId: number, rating: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${productId}/rate`, { rating });
  }

  getTop5SellingProductsByOwner(ownerId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/top5/${ownerId}`);
  }

  getTop10SellingProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/top10`);
  }
}
